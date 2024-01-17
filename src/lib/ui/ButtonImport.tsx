'use client'

import { IconButton, Tooltip } from '@radix-ui/themes'
import { type FC, memo } from 'react'

import { UploadIcon } from '@ui/icons/UploadIcon'
import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'

const ButtonImport: FC<Props> = memo(({ children, tooltipcontent, onClick }) => {
  const Button = (
    <IconButton size='2' color='gray' variant='outline' onClick={onClick}>
      <UploadIcon width='20px' height='20px' label='import' />
      {children}
    </IconButton>
  )

  if (!tooltipcontent) {
    return Button
  }

  return <Tooltip content={tooltipcontent}>{Button}</Tooltip>
})

ButtonImport.displayName = 'ButtonImport'

type Props = Pick<ComponentProps, 'children' | 'tooltipcontent' | 'onClick'>

const Button = withFileUploader(ButtonImport)

export { Button as ButtonImport }
