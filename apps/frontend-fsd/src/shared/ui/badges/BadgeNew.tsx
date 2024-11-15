import { Badge } from '@radix-ui/themes'

import type { Props } from './types'

export const BadgeNew = (props: Props) => (
  <Badge size='2' color='blue' {...props}>
    New
  </Badge>
)
