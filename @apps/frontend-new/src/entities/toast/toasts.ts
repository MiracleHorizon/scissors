import { toast } from 'sonner'

import { MAX_FILE_SIZE_MB } from '@/shared/file'

export const showFileSizeToast = (): void => {
  toast.error('The selected file is too large', {
    id: 'file-size-error',
    position: 'bottom-center',
    closeButton: true,
    description: `The maximum file size is ${MAX_FILE_SIZE_MB} mb.`
  })
}
