import { Button, Dialog, Flex } from '@radix-ui/themes'
import { type CSSProperties, useCallback, useLayoutEffect, useRef, useState } from 'react'

import { useOutputStore } from '@stores/output'

/*
 * Mirror video.
 */
const videoStyle = {
  transform: 'rotateY(180deg)',
  WebkitTransform: 'rotateY(180deg)',
  MozTransform: 'rotateY(180deg)'
} as CSSProperties

export function ImageCameraDialogContent() {
  const [isStreaming, setIsStreaming] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const setFile = useOutputStore(state => state.setFile)

  function handleClearCanvas() {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    context.fillStyle = '#252525'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const handleVideoCanPlay = useCallback(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas || isStreaming) return

    video.setAttribute('width', '100%')
    video.setAttribute('height', '100%')
    canvas.setAttribute('width', '100%')
    canvas.setAttribute('height', '100%')

    setIsStreaming(true)
  }, [isStreaming])

  function canvasToFile(canvas: HTMLCanvasElement) {
    const fileName = 'photo-from-device.png'
    const fileMime = 'image/png'

    canvas.toBlob(blob => {
      if (!blob) return

      const file = new File([blob], fileName, {
        type: fileMime
      })

      setFile(file)
    }, fileMime)
  }

  function drawCanvasPhoto(canvas: HTMLCanvasElement, video: HTMLVideoElement) {
    const width = 1920
    const height = 1080

    const context = canvas.getContext('2d')
    if (!context) {
      return handleClearCanvas()
    }

    canvas.width = width
    canvas.height = height
    context.drawImage(video, 0, 0, width, height)
  }

  function handleMakePhoto() {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (!video || !canvas) {
      return handleClearCanvas()
    }

    drawCanvasPhoto(canvas, video)
    canvasToFile(canvas)
  }

  useLayoutEffect(() => {
    const video = videoRef.current
    if (!video) return

    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: 'environment'
        },
        audio: false
      })
      .then(stream => {
        video.srcObject = stream
        void video.play()
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log('An error occurred while accessing the device camera', err)
      })
  }, [])

  return (
    <Dialog.Content>
      <Flex direction='column' align='center' justify='center' gap='2'>
        <Dialog.Title mb='0' align='left'>
          Device Camera
        </Dialog.Title>
        <Dialog.Description mb='2'>Take a photo with your device camera.</Dialog.Description>

        <video ref={videoRef} style={videoStyle} onCanPlay={handleVideoCanPlay} />
        <canvas ref={canvasRef} className='hidden' />

        <Flex justify='end' gap='3' width='100%' mt='4'>
          <Dialog.Close>
            <Button radius='large' onClick={handleMakePhoto}>
              Take photo
            </Button>
          </Dialog.Close>
        </Flex>
      </Flex>
    </Dialog.Content>
  )
}
