import { Heading } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

interface Props extends MarginProps {
  title: string
}

export const AppearancePopoverTitle = ({ title, ...props }: Props) => (
  <Heading {...props} size='2' color='gray' weight='medium'>
    {title}
  </Heading>
)
