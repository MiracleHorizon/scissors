

import { memo } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { DownloadIcon } from '@scissors/react-icons/DownloadIcon'

interface Props extends MarginProps {
  onClick: VoidFunction
  tooltipContent?: string
}

export const ButtonDownload = memo(({ tooltipContent, onClick, ...props }: Props) => {
  const Button = (
    <IconButton {...props} size='2' color='gray' variant='outline' onClick={onClick}>
      <DownloadIcon width='20px' height='20px' />
    </IconButton>
  )

  if (!tooltipContent) {
    return Button
  }

  return <Tooltip content={tooltipContent}>{Button}</Tooltip>
})

ButtonDownload.displayName = 'ButtonDownload'
