import { IconButton } from '@radix-ui/themes'
import type { FC, PropsWithChildren } from 'react'

export const ExtendToolbarButton: FC<Props> = ({ children, onClick }) => (
  <IconButton variant='outline' radius='large' onClick={onClick}>
    {children}
  </IconButton>
)

type Props = PropsWithChildren<{
  onClick: VoidFunction
}>
