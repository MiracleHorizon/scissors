'use client'

import { IconButton } from '@radix-ui/themes'
import { ClipboardCopyIcon } from '@radix-ui/react-icons'

import { copyToClipboard } from '@helpers/copyToClipboard'
import type { ButtonProps } from '@lib/theme'

export function ButtonClipboardCopy({ copyValue, size, variant = 'ghost', color = 'gray' }: Props) {
  const handleCopy = () => copyToClipboard(copyValue)

  return (
    <IconButton size={size} variant={variant} color={color} radius='large' onClick={handleCopy}>
      <ClipboardCopyIcon />
    </IconButton>
  )
}

interface Props extends ButtonProps {
  copyValue: string
}
