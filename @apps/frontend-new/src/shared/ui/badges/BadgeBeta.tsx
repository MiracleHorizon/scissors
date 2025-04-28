import { Badge, Tooltip, type BadgeProps } from '@radix-ui/themes'

export const BadgeBeta = (props: BadgeProps) => (
  <Tooltip content='This feature is in beta. It may not work as expected'>
    <Badge size='2' color='orange' {...props}>
      Beta
    </Badge>
  </Tooltip>
)
