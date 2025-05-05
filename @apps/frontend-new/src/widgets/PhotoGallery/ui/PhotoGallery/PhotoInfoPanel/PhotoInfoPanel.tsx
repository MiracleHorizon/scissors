import { Button, Card, Flex, Heading, SegmentedControl, Separator, Text } from '@radix-ui/themes'
import type { ReactNode } from 'react'

import { DownloadIcon } from '@scissors/react-icons/DownloadIcon'

export const PhotoInfoPanel = ({
  slideLabel,
  slideOrder,
  totalSlides,
  renderSlot,
  view,
  onViewChange
}: {
  slideLabel: string
  slideOrder: number
  totalSlides: number
  downloadPayloadJSON: string
  view: 'split' | 'slider' | 'toggle'
  // eslint-disable-next-line
  onViewChange: (view: 'split' | 'slider' | 'toggle') => void
  renderSlot?: NonNullable<ReactNode>
}) => (
  <Card size='2'>
    <Flex width='100%' justify='between'>
      <Flex direction='column'>
        <Heading as='h4' size='5'>
          {slideLabel}
        </Heading>
        <Text size='1' color='gray'>
          {slideOrder} of {totalSlides}
        </Text>
      </Flex>

      <Button variant='soft' radius='large' color='gray'>
        <DownloadIcon />
        Download
      </Button>
    </Flex>

    <Separator size='4' mt='3' mb='4' />

    <Flex>
      <SegmentedControl.Root
        size='3'
        radius='large'
        value={view}
        onValueChange={value => onViewChange(value as 'split' | 'slider' | 'toggle')}
      >
        <SegmentedControl.Item value='split'>Split</SegmentedControl.Item>
        <SegmentedControl.Item value='slider'>Slider</SegmentedControl.Item>
        <SegmentedControl.Item value='toggle'>Toggle</SegmentedControl.Item>
      </SegmentedControl.Root>
    </Flex>

    {renderSlot}
  </Card>
)
