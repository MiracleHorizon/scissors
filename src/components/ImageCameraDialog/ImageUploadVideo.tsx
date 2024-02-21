'use client'

import { type MouseEvent, useLayoutEffect, useRef, useState } from 'react'
import { Button, Flex } from '@radix-ui/themes'

import { useOutputStore } from '@stores/output'

const width = '100%'
const height = '100%'

export function ImageUploadVideo() {
  const [isStreaming, setIsStreaming] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const setFile = useOutputStore(state => state.setFile)

  function clearPhoto() {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    context.fillStyle = '#AAA'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  function onVideoCanPlay() {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas || isStreaming) return

    video.setAttribute('width', width)
    video.setAttribute('height', height)
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)

    setIsStreaming(true)
  }

  function onButtonClick(ev: MouseEvent) {
    ev.preventDefault()

    if (!canvasRef.current || !videoRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    if (!context || !width || !height || !video) {
      return clearPhoto()
    }

    const canvasWidth = 1920
    const canvasHeight = 1080

    canvas.width = canvasWidth
    canvas.height = canvasHeight
    context.drawImage(video, 0, 0, canvasWidth, canvasHeight)

    const fileFormat = 'image/png'
    canvas.toBlob(blob => {
      if (!blob) return

      const file = new File([blob], 'image.png', {
        type: fileFormat
      })

      setFile(file)
    }, fileFormat)
  }

  useLayoutEffect(() => {
    const video = videoRef.current
    if (!video) return

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false
      })
      .then(stream => {
        video.srcObject = stream
        void video.play()
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
  }, [])

  return (
    <>
      <Flex direction='column' align='center' justify='center' gap='4'>
        <video ref={videoRef} onCanPlay={onVideoCanPlay} />

        <Button style={{ alignSelf: 'flex-end' }} radius='large' onClick={onButtonClick}>
          Take photo
        </Button>
      </Flex>

      <canvas ref={canvasRef} className='hidden' />
    </>
  )
}
