import { Badge, type MarginProps } from '@radix-ui/themes'

import type { BadgeProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export function BadgeNew(props: Props) {
  return (
    <Badge size='1' color='blue' {...props}>
      New
    </Badge>
  )
}

type Props = BadgeProps & MarginProps & ClassNameProps
