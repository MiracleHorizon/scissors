import { Badge, type MarginProps } from '@radix-ui/themes'

import type { BadgeProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export function BadgeBeta(props: Props) {
  return (
    <Badge size='1' color='orange' {...props}>
      Beta
    </Badge>
  )
}

type Props = BadgeProps & MarginProps & ClassNameProps
