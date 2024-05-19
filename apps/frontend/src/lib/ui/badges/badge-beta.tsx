import { Badge, Tooltip } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'
import type { FC } from 'react'

import type { BadgeProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const BadgeBeta: FC<Props> = props => (
  <Tooltip content='This feature is in beta. It may not work as expected'>
    <Badge size='2' color='orange' {...props}>
      Beta
    </Badge>
  </Tooltip>
)

type Props = BadgeProps & MarginProps & ClassNameProps
