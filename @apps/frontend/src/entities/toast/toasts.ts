import { toast } from 'sonner'

import { MAX_FILE_SIZE_MB } from '@/shared/file'

export const showInvalidFileSizeToast = () => {
  toast.error('The selected file is too large', {
    id: 'invalid-file-size-error',
    position: 'bottom-center',
    closeButton: true,
    description: `The maximum file size is ${MAX_FILE_SIZE_MB} mb.`
  })
}
