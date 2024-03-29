import { Badge } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'
import type { FC } from 'react'

import type { BadgeProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const BadgeNew: FC<Props> = props => (
  <Badge size='2' color='blue' {...props}>
    New
  </Badge>
)

type Props = BadgeProps & MarginProps & ClassNameProps
