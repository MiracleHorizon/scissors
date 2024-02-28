'use client'

import { type FC, memo } from 'react'
import { IconButton, type MarginProps, Tooltip } from '@radix-ui/themes'

import { DownloadIcon } from '@ui/icons/DownloadIcon'

export const ButtonDownload: FC<Props> = memo(({ tooltipContent, onClick, ...props }) => {
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

interface Props extends MarginProps {
  onClick: VoidFunction
  tooltipContent?: string
}
