import { Popover } from '@radix-ui/themes'
import type { FC, ReactNode } from 'react'

import { ButtonInfo } from '@ui/ButtonInfo'

export const SliderPopover: FC<Props> = ({ content, disabled }) => (
  <Popover.Root open={disabled ? false : undefined}>
    <Popover.Trigger>
      <ButtonInfo ml='3' />
    </Popover.Trigger>

    <Popover.Content size='1' align='center'>
      {content}
    </Popover.Content>
  </Popover.Root>
)

interface Props {
  content: ReactNode
  disabled?: boolean
}
