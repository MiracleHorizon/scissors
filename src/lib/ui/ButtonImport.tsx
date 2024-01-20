'use client'

import { IconButton, Tooltip } from '@radix-ui/themes'

import { UploadIcon } from '@ui/icons/UploadIcon'
import { withFileUploader } from '@hoc/withFileUploader'

export const ButtonImport = withFileUploader(({ children, tooltipcontent, onClick }) => {
  const buttonJSX = (
    <IconButton size='2' color='gray' variant='outline' onClick={onClick}>
      <UploadIcon width='20px' height='20px' label='import' />
      {children}
    </IconButton>
  )

  if (tooltipcontent) {
    return <Tooltip content={tooltipcontent}>{buttonJSX}</Tooltip>
  }

  return buttonJSX
})
