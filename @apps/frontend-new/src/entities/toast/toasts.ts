import { toast } from 'sonner'

import { IMAGE_FILE_FORMAT } from '@scissors/sharp'

import { MAX_FILE_SIZE_MB } from '@/shared/file'

export const showInvalidFileSizeToast = () => {
  toast.error('The selected file is too large', {
    id: 'invalid-file-size-error',
    position: 'bottom-center',
    closeButton: true,
    description: `The maximum file size is ${MAX_FILE_SIZE_MB} mb.`
  })
}

export const showInvalidFileTypeToast = () => {
  toast.error('The selected file is not a valid image', {
    id: 'invalid-file-type-error',
    position: 'bottom-center',
    closeButton: true,
    description: `The selected file type is not supported. Allowed formats: ${Object.values(IMAGE_FILE_FORMAT).join(', ')}`
  })
}

export const showSomethingWentWrongToast = () => {
  toast.error('Something went wrong', {
    id: 'something-went-wrong-error',
    position: 'bottom-center',
    closeButton: true
  })
}
