import { Heading } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'
import type { FC } from 'react'

interface Props extends MarginProps {
  title: string
}

export const AppearancePopoverTitle: FC<Props> = ({ title, ...props }) => (
  <Heading {...props} size='2' color='gray' weight='medium'>
    {title}
  </Heading>
)
