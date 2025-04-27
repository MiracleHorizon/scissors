

import { IconButton, Tooltip } from '@radix-ui/themes'

import { UploadIcon } from '@scissors/react-icons/UploadIcon'

import { withFileUploader } from '@hoc/withFileUploader'

export const ButtonUpload = withFileUploader(({ children, tooltipcontent, onClick }) => {
  const buttonJSX = (
    <IconButton size='2' color='gray' variant='outline' onClick={onClick}>
      <UploadIcon width='20px' height='20px' />
      {children}
    </IconButton>
  )

  if (tooltipcontent) {
    return <Tooltip content={tooltipcontent}>{buttonJSX}</Tooltip>
  }

  return buttonJSX
})
