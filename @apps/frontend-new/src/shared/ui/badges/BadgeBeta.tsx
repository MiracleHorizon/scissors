import { Badge, type BadgeProps } from '@radix-ui/themes'

export const BadgeBeta = (props: BadgeProps) => (
  <Badge size='2' color='orange' radius='large' {...props}>
    Beta
  </Badge>
)
