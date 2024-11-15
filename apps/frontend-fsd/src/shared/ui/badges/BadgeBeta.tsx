import { Badge, Tooltip } from '@radix-ui/themes'

import type { Props } from './types'

export const BadgeBeta = (props: Props) => (
  <Tooltip content='This feature is in beta. It may not work as expected'>
    <Badge size='2' color='orange' {...props}>
      Beta
    </Badge>
  </Tooltip>
)
