'use client'

import { IconButton, Tooltip } from '@radix-ui/themes'
import { UploadIcon } from '@radix-ui/react-icons'

import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'

function ButtonImport({ children, tooltipcontent, onClick }: Props) {
  const Button = (
    <IconButton size='2' color='gray' variant='outline' onClick={onClick}>
      <UploadIcon width='20px' height='20px' />
      {children}
    </IconButton>
  )

  if (!tooltipcontent) {
    return Button
  }

  return <Tooltip content={tooltipcontent}>{Button}</Tooltip>
}

type Props = Pick<ComponentProps, 'children' | 'tooltipcontent' | 'onClick'>

ButtonImport.displayName = 'ButtonImport'

const Button = withFileUploader(ButtonImport)

export { Button as ButtonImport }
