import { Popover } from '@radix-ui/themes'
import type { ReactNode } from 'react'

import { ButtonInfo } from '@ui/ButtonInfo'

interface Props {
  content: ReactNode
  disabled?: boolean
}

export const SliderPopover = ({ content, disabled }: Props) => (
  <Popover.Root open={disabled ? false : undefined}>
    <Popover.Trigger>
      <ButtonInfo ml='3' />
    </Popover.Trigger>

    <Popover.Content size='1' align='center'>
      {content}
    </Popover.Content>
  </Popover.Root>
)
