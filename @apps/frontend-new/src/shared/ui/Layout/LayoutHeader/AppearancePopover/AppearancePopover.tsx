import { Suspense, useState } from 'react'
import { Flex, Skeleton, IconButton, Popover } from '@radix-ui/themes'

import { MixerHorizontalIcon } from '@scissors/react-icons/MixerHorizontalIcon'

import { ThemeControl } from '@/features/theme'

export const AppearancePopover = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover.Root open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <AppearancePopoverTrigger />

      <Popover.Content data-cy='appearance-popover-content' sideOffset={3}>
        <Suspense fallback={<Skeleton width='170px' height='217px' />}>
          {isOpen && <AppearancePopoverContent />}
        </Suspense>
      </Popover.Content>
    </Popover.Root>
  )
}

const AppearancePopoverContent = () => (
  <Flex direction='column' align='start' gap='3' width='170px'>
    <ThemeControl />

    {/* <Separator size='4' />

    <Flex direction='column' width='100%'>
      <AppearancePopoverTitle title='Theme Color' mb='3' />
      <ThemeColorGrid />
    </Flex> */}
  </Flex>
)

// const AppearancePopoverTitle = ({
//   title,
//   ...props
// }: MarginProps & {
//   title: string
// }) => (
//   <Heading {...props} size='2' color='gray' weight='medium'>
//     {title}
//   </Heading>
// )

const AppearancePopoverTrigger = () => (
  <Popover.Trigger>
    <IconButton
      color='gray'
      radius='large'
      variant='ghost'
      style={{
        width: '20px',
        height: '20px'
      }}
      data-cy='appearance-popover-trigger'
    >
      <MixerHorizontalIcon color='gray' width='16px' height='16px' label='appearance settings' />
    </IconButton>
  </Popover.Trigger>
)
