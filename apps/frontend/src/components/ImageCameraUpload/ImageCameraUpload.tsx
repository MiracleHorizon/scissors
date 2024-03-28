import { useMemo, useState } from 'react'
import { Dialog, IconButton } from '@radix-ui/themes'

import { ImageCameraUploadContent } from './ImageCameraUploadContent'
import { CameraIcon } from '@ui/icons/CameraIcon'
import { CameraOffIcon } from '@ui/icons/CameraOffIcon'
import { useMediaDevices } from '@hooks/useMediaDevices'

export function ImageCameraUpload() {
  const [isOpen, setIsOpen] = useState(false)

  const {
    state: { devices }
  } = useMediaDevices()
  const cameras = useMemo(() => devices.filter(d => d.kind === 'videoinput'), [devices])
  const isDisabled = cameras.length === 0 || cameras[0].deviceId === ''

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger>
        <IconButton variant='outline' color='gray' disabled={isDisabled} onClick={handleOpen}>
          {isDisabled ? (
            <CameraOffIcon width='22px' height='22px' />
          ) : (
            <CameraIcon width='22px' height='22px' />
          )}
        </IconButton>
      </Dialog.Trigger>

      {isOpen && <ImageCameraUploadContent cameras={cameras} handleClose={handleClose} />}
    </Dialog.Root>
  )
}
