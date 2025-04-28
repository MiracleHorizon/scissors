import type { ButtonHTMLAttributes } from 'react'
import { Button, IconButton, type ButtonProps } from '@radix-ui/themes'

import { DownloadIcon } from '@scissors/react-icons/DownloadIcon'

export const DownloadButton = ({
  text,
  color = 'indigo',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  color?: ButtonProps['color']
}) => {
  if (!text) {
    return (
      <IconButton variant='solid' color={color} radius='large' {...props}>
        <DownloadIcon width='18px' height='18px' />
      </IconButton>
    )
  }

  return (
    <Button variant='solid' color={color} radius='large' {...props}>
      <DownloadIcon width='18px' height='18px' />
      {text}
    </Button>
  )
}
