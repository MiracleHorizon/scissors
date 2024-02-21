'use client'

import { useEffect, useState } from 'react'
import { Dialog, IconButton } from '@radix-ui/themes'

import { ImageUploadVideo } from './ImageUploadVideo'
import { CameraIcon } from '@ui/icons/CameraIcon'
import { CameraOffIcon } from '@ui/icons/CameraOffIcon'

function ImageCameraDialogTrigger() {
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false
      })
      .then(() => setIsSupported(true))
      .catch(() => setIsSupported(false))
  }, [])

  return (
    <Dialog.Trigger>
      <IconButton color='gray' variant='outline' disabled={!isSupported}>
        {isSupported ? (
          <CameraIcon width='19px' height='19px' />
        ) : (
          <CameraOffIcon width='19px' height='19px' />
        )}
      </IconButton>
    </Dialog.Trigger>
  )
}

export const ImageCameraDialog = () => (
  <Dialog.Root>
    <ImageCameraDialogTrigger />

    <Dialog.Content style={{ padding: 'var(--space-4)' }}>
      <ImageUploadVideo />
    </Dialog.Content>
  </Dialog.Root>
)
