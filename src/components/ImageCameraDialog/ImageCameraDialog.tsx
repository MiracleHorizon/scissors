'use client'

import { useState } from 'react'
import { Dialog } from '@radix-ui/themes'

import { ImageCameraDialogTrigger } from './ImageCameraDialogTrigger'
import { ImageCameraDialogContent } from './ImageCameraDialogContent'

export const ImageCameraDialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <ImageCameraDialogTrigger />

      {isOpen && <ImageCameraDialogContent />}
    </Dialog.Root>
  )
}
