'use client'

import { useState } from 'react'
import { IconButton, Popover, Tooltip } from '@radix-ui/themes'

import { Link2Icon } from '@scissors/react-icons/Link2Icon'

import { ImageUploadForm } from './image-upload-form'
import { useOutputStore } from '@stores/output'

function UploadForm({ onClose }: { onClose: VoidFunction }) {
  const [value, setValue] = useState('')
  const setFile = useOutputStore(state => state.setFile)

  const handleUpload = (file: File) => {
    setFile(file)
    onClose()
  }

  return <ImageUploadForm value={value} setValue={setValue} onUpload={handleUpload} />
}

export function ImageUploadPopover() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Tooltip content='Upload an image using a link'>
        <Popover.Trigger>
          <IconButton color='gray' variant='outline'>
            <Link2Icon width='18px' height='18px' label='upload an image using a link' />
          </IconButton>
        </Popover.Trigger>
      </Tooltip>

      {isOpen && (
        <Popover.Content align='center' width='370px'>
          <UploadForm onClose={handleClose} />
        </Popover.Content>
      )}
    </Popover.Root>
  )
}
