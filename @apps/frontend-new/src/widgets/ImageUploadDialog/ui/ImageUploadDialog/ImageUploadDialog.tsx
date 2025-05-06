import { useState, type ReactNode } from 'react'
import { Dialog, Flex, Tooltip } from '@radix-ui/themes'

import { ImageDropzone, ImageUploadForm } from '@/features/image/upload'

// TODO: Это feature? Widget?
/* eslint no-unused-vars: 0 */
export const ImageUploadDialog = ({
  accept,
  setFile,
  trigger,
  triggerTooltip
}: {
  accept: string
  setFile: (file: File | null) => void
  trigger: ReactNode
  /**
   * To display a tooltip, you need to wrap the Dialog.Trigger component, not the trigger itself
   */
  triggerTooltip?: string
}) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {triggerTooltip ? (
        <Tooltip content={triggerTooltip}>
          <Dialog.Trigger>{trigger}</Dialog.Trigger>
        </Tooltip>
      ) : (
        <Dialog.Trigger>{trigger}</Dialog.Trigger>
      )}

      {open && (
        <Dialog.Content maxWidth='500px'>
          <Flex direction='column' gap='4' width='100%'>
            <ImageDropzone accept={accept} setFile={setFile} onUpload={handleClose} />
            <UploadForm onClose={handleClose} setFile={setFile} />
          </Flex>
        </Dialog.Content>
      )}
    </Dialog.Root>
  )
}

const UploadForm = ({
  setFile,
  onClose
}: {
  setFile: (file: File | null) => void
  onClose: VoidFunction
}) => {
  const [value, setValue] = useState('')

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
