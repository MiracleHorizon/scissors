'use client'

import { IconButton, Tooltip } from '@radix-ui/themes'
import { UploadIcon } from '@radix-ui/react-icons'

import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'

function ButtonFileUpload({ children, onClick }: Pick<ComponentProps, 'children' | 'onClick'>) {
  return (
    <Tooltip content='Upload New File'>
      <IconButton size='2' color='gray' variant='outline' onClick={onClick}>
        <UploadIcon width='20px' height='20px' />
        {children}
      </IconButton>
    </Tooltip>
  )
}

ButtonFileUpload.displayName = 'ButtonFileUpload'

const Button = withFileUploader(ButtonFileUpload)

export { Button as ButtonFileUpload }
