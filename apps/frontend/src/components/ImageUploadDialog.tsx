'use client'

import { useState } from 'react'
import { Dialog, Flex, IconButton } from '@radix-ui/themes'

import { UploadIcon } from '@scissors/react-icons/UploadIcon'

import { ImageDropzone } from '@components/ImageDropzone'
import { ImageUploadForm } from '@components/ImageUploadForm'
import { useOutputStore } from '@stores/output'
import { allowedImageFormats } from '@site/config'

interface FormProps {
  onClose: VoidFunction
}

const UploadForm = ({ onClose }: FormProps) => {
  const [value, setValue] = useState('')
  const setFile = useOutputStore(state => state.setFile)

  const handleUpload = (file: File) => {
    setFile(file)
    onClose()
  }

  return (
    <ImageUploadForm
      value={value}
      setValue={setValue}
      onUpload={handleUpload}
      shouldFocusOnRender={false}
    />
  )
}

export const ImageUploadDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const setFile = useOutputStore(state => state.setFile)

  const handleClose = () => setIsOpen(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>
        <IconButton size='2' color='gray' variant='outline'>
          <UploadIcon width='20px' height='20px' />
        </IconButton>
      </Dialog.Trigger>

      {isOpen && (
        <Dialog.Content maxWidth='560px'>
          <Flex direction='column' gap='4' width='100%'>
            <ImageDropzone accept={allowedImageFormats} setFile={setFile} onUpload={handleClose} />

            <UploadForm onClose={handleClose} />
          </Flex>
        </Dialog.Content>
      )}
    </Dialog.Root>
  )
}
