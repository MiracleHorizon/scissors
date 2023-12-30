'use client'

import { memo } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'
import { DownloadIcon } from '@radix-ui/react-icons'

export const ButtonExport = memo(({ tooltipContent, onClick }: Props) => {
  const Button = (
    <IconButton size='2' color='gray' variant='outline' onClick={onClick}>
      <DownloadIcon width='20px' height='20px' />
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
