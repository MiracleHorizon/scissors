import { useEffect, useRef, useState } from 'react'
import {
  Button,
  Dialog,
  Flex,
  SegmentedControl,
  Separator,
  Skeleton,
  Switch,
  Text
} from '@radix-ui/themes'

import { IMAGE_FILE_FORMAT } from '@scissors/sharp'

import { useOutputStore } from '@stores/output'
import { isValidFileSize } from '@helpers/file/isValidFileSize'
import { INVALID_FILE_SIZE_MESSAGE } from '@helpers/file/constants'
import type { MediaDevice } from '@app-types/MediaDevice'

export function ImageCameraUploadContent({ cameras, handleClose }: Props) {
  const [selectedCamera, setSelectedCamera] = useState<MediaDevice | null>(cameras[0] ?? null)
  const [isUploading, setIsUploading] = useState(false)
  const [isMirror, setIsMirror] = useState(false)
  const [error, setError] = useState<unknown | null>(null)
  const isPermissionDenied = error instanceof Error && error.name === 'NotAllowedError'

  const streamRef = useRef<MediaStream | null>(null)

  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const setFile = useOutputStore(state => state.setFile)

  function canvasToFile(canvas: HTMLCanvasElement) {
    const fileName = 'photo-from-device.png'
    const fileType = `image/${IMAGE_FILE_FORMAT.PNG}`

    canvas.toBlob(blob => {
      if (!blob) return

      if (!isValidFileSize(blob.size)) {
        return setError(new Error(INVALID_FILE_SIZE_MESSAGE))
      }

      const file = new File([blob], fileName, {
        type: fileType
      })

      setFile(file)
    }, fileType)
  }

  function createFile() {
    if (!isUploading) return
    const canvas = canvasRef.current
    const video = videoRef.current
    if (!canvas || !video) return

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    const ctx = canvas.getContext('2d')!
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    try {
      canvasToFile(canvas)
      dispose()
      // handleClose()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)

      setError(err)
    }
  }

  function start() {
    if (isUploading) return

    setIsUploading(true)
  }

  function dispose() {
    setIsUploading(false)

    streamRef.current?.getTracks().forEach(track => track.stop())
    streamRef.current = null

    const video = videoRef.current
    if (video) {
      video.pause()
      video.srcObject = null
    }

    setSelectedCamera(null)
  }

  function onClose() {
    dispose()
    handleClose()
  }

  function display(selectedCamera: MediaDevice) {
    dispose()

    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width: 512,
          height: 512,
          deviceId: selectedCamera.deviceId
        }
      })
      .then(mediaStream => {
        streamRef.current = mediaStream

        const video = videoRef.current
        if (!video) return

        video.srcObject = mediaStream

        start()
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)

        setError(err)
      })
  }

  useEffect(() => {
    setSelectedCamera(cameras[0] ?? null)
  }, [cameras])

  useEffect(() => {
    if (selectedCamera) display(selectedCamera)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCamera])

  return (
    <Dialog.Content>
      <Flex align='start' direction='column'>
        {cameras.length > 0 && !isPermissionDenied && (
          <>
            <SegmentedControl.Root defaultValue={cameras[0].deviceId}>
              {cameras.map(({ deviceId, label }) => (
                <SegmentedControl.Item key={deviceId} value={deviceId}>
                  {label}
                </SegmentedControl.Item>
              ))}
            </SegmentedControl.Root>

            <Separator size='4' my='4' />
          </>
        )}

        {isPermissionDenied && (
          <Text as='p'>You need to allow camera access in your browser settings.</Text>
        )}

        <canvas ref={canvasRef} className='hidden' />
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            transform: isMirror ? 'scaleX(-1)' : undefined
          }}
        />

        {(isPermissionDenied || cameras.length === 0) && (
          <Skeleton width='100%' height='300px' mt='4' />
        )}

        <Flex asChild align='center' justify='end' gap='2' width='100%' mt='4'>
          <footer>
            <Flex align='center' gap='2' mr='auto'>
              Mirror
              <Switch checked={isMirror} onClick={() => setIsMirror(prevState => !prevState)} />
            </Flex>

            <Button variant='soft' color='gray' radius='large' onClick={onClose}>
              Close
            </Button>

            <Button radius='large' onClick={createFile}>
              Upload
            </Button>
          </footer>
        </Flex>
      </Flex>
    </Dialog.Content>
  )
}

interface Props {
  cameras: MediaDevice[]
  handleClose: VoidFunction
}
