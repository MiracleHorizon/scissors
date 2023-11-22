'use client'

import { Text } from '@radix-ui/themes'

import { DetailsPopover } from '@app/docs/components/DetailsPopover'

export default function MoirePatternPopover() {
  return (
    <DetailsPopover
      title='moiré pattern'
      moreInfoLink='https://en.wikipedia.org/wiki/Moir%C3%A9_pattern'
    >
      <Text as='p'>
        Large-scale interference patterns that can be produced when a partially opaque ruled pattern
        with transparent gaps is overlaid on another similar pattern
      </Text>
    </DetailsPopover>
  )
}
