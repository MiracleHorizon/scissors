import { Heading } from '@radix-ui/themes'

import type { MarginProps } from '@libs/radix'

export function SettingsPopoverTitle({ title, ...props }: Props) {
  return (
    <Heading {...props} size='2' weight='medium'>
      {title}
    </Heading>
  )
}

interface Props extends MarginProps {
  title: string
}
