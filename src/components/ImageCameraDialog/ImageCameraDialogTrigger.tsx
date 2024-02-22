import { Dialog, IconButton } from '@radix-ui/themes'

import { CameraIcon } from '@ui/icons/CameraIcon'
import { CameraOffIcon } from '@ui/icons/CameraOffIcon'
import { isMediaDevicesSupported } from '@helpers/isMediaDevicesSupported'

export function ImageCameraDialogTrigger() {
  const isSupported = isMediaDevicesSupported()

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
