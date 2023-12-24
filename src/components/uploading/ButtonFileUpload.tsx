'use client'

import { IconButton } from '@radix-ui/themes'
import { UploadIcon } from '@radix-ui/react-icons'

import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'

function ButtonFileUpload({ children, onClick }: Pick<ComponentProps, 'children' | 'onClick'>) {
  return (
    <IconButton size='2' color='gray' variant='outline' onClick={onClick}>
      <UploadIcon width='20px' height='20px' />
      {children}
    </IconButton>
  )
}

ButtonFileUpload.displayName = 'ButtonFileUpload'

const Button = withFileUploader(ButtonFileUpload)

export { Button as ButtonFileUpload }
