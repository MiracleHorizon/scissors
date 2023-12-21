import { Popover } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import { ButtonInfo } from '@ui/ButtonInfo'

export function OptionSliderPopover({ children, isOptionDisabled }: Props) {
  const isDisabled = () => {
    if (!isOptionDisabled) return

    return false
  }

  return (
    <Popover.Root open={isDisabled()}>
      <Popover.Trigger>
        <ButtonInfo ml='3' />
      </Popover.Trigger>

      <Popover.Content size='1' align='center'>
        {children}
      </Popover.Content>
    </Popover.Root>
  )
}

type Props = PropsWithChildren<{
  isOptionDisabled?: boolean
}>
