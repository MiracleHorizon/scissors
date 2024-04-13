import { Heading } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'
import type { FC } from 'react'

export const AppearancePopoverTitle: FC<Props> = ({ title, ...props }) => (
  <Heading {...props} size='2' color='gray' weight='medium'>
    {title}
  </Heading>
)

interface Props extends MarginProps {
  title: string
}
