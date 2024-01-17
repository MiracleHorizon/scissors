'use client'

import { type FC, memo } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'

import { DownloadIcon } from '@ui/icons/DownloadIcon'

export const ButtonExport: FC<Props> = memo(({ tooltipContent, onClick }) => {
  const Button = (
    <IconButton size='2' color='gray' variant='outline' onClick={onClick}>
      <DownloadIcon width='20px' height='20px' label='export' />
    </IconButton>
  )

  if (!tooltipContent) {
    return Button
  }

  return <Tooltip content={tooltipContent}>{Button}</Tooltip>
})

ButtonExport.displayName = 'ButtonExport'

interface Props {
  onClick: VoidFunction
  tooltipContent?: string
}
