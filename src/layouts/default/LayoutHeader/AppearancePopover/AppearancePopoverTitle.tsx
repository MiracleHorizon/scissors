import { Heading, type MarginProps } from '@radix-ui/themes'
import type { FC } from 'react'

export const AppearancePopoverTitle: FC<Props> = ({ title, ...props }) => (
  <Heading {...props} size='2' weight='medium'>
    {title}
  </Heading>
)

interface Props extends MarginProps {
  title: string
}
