import { IconButton, Popover } from '@radix-ui/themes'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import type { PropsWithChildren } from 'react'

export function OptionSliderPopover({ children, isOptionDisabled }: Props) {
  const isDisabled = () => {
    if (!isOptionDisabled) return

    return false
  }

  return (
    <Popover.Root open={isDisabled()}>
      <Popover.Trigger>
        <IconButton
          ml='3'
          variant='ghost'
          size='1'
          radius='large'
          color='gray'
          data-accent-color='gray'
        >
          <InfoCircledIcon width='18px' height='18px' color='gray' />
        </IconButton>
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
