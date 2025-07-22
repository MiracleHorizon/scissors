import {
  Button,
  Card,
  Flex,
  Heading,
  SegmentedControl,
  Separator,
  Text,
  Tooltip
} from '@radix-ui/themes'
import type { ReactNode } from 'react'

import { DownloadIcon } from '@scissors/react-icons/DownloadIcon'
import type { ConvertSettings } from '@scissors/sharp'

import { createAndDownloadJSON } from '@/shared/file'

export const PhotoInfoPanel = ({
  slideLabel,
  slideOrder,
  totalSlides,
  settings,
  renderFooter,
  view,
  onViewChange
}: {
  slideLabel: string
  slideOrder: number
  totalSlides: number
  settings: Partial<ConvertSettings>
  view: 'split' | 'slider' | 'toggle'
  // eslint-disable-next-line
  onViewChange: (view: 'split' | 'slider' | 'toggle') => void
  renderFooter?: NonNullable<ReactNode>
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

      {/* TODO: Это фича */}
      <Tooltip content='Download settings'>
        <Button
          variant='soft'
          radius='large'
          color='gray'
          onClick={() =>
            createAndDownloadJSON({
              payload: settings,
              fileName: slideLabel
            })
          }
        >
          <DownloadIcon />
          Download
        </Button>
      </Tooltip>
    </Flex>

    <Separator size='4' mt='3' mb='4' />

    {/* TODO: Это фича */}
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

    {renderFooter}
  </Card>
)
