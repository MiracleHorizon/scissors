'use client'

import { IconButton } from '@radix-ui/themes'
import { FilePlusIcon } from '@radix-ui/react-icons'

import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'

function ButtonFileUpload({ children, onClick }: Pick<ComponentProps, 'children' | 'onClick'>) {
  return (
    <IconButton size='2' variant='surface' onClick={onClick}>
      <FilePlusIcon width='20px' height='20px' />
      {children}
    </IconButton>
  )
}

const Button = withFileUploader(ButtonFileUpload)

export { Button as ButtonFileUpload }
