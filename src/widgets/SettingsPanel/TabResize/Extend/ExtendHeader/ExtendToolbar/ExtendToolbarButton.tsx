import { IconButton } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

export function ExtendToolbarButton({ children, onClick }: Props) {
  return (
    <IconButton variant='outline' radius='large' onClick={onClick}>
      {children}
    </IconButton>
  )
}

type Props = PropsWithChildren<{
  onClick: VoidFunction
}>
