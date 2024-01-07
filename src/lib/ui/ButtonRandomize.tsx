import { forwardRef } from 'react'
import { Button, type MarginProps } from '@radix-ui/themes'

import type { ButtonProps } from '@lib/theme'

export const ButtonRandomize = forwardRef<HTMLButtonElement, Props>(
  ({ radius = 'large', ...props }, ref) => (
    <Button ref={ref} {...props} radius={radius}>
      Randomize
    </Button>
  )
)

ButtonRandomize.displayName = 'ButtonRandomize'

interface Props extends ButtonProps, MarginProps {
  onClick: VoidFunction
}
