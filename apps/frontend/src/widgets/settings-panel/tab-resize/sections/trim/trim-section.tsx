import { Flex } from '@radix-ui/themes'

import { TrimHeader } from './trim-header'
import { TrimBackground } from './trim-background'
import { InputTrimThreshold } from './input-trim-threshold'
import { TabResizeSection } from '../../tab-resize-section'
import { CheckboxTrimLineArt } from './checkbox-trim-line-art'

export const TrimSection = () => (
  <TabResizeSection>
    <>
      <TrimHeader />
      <Flex direction='column' gap='2' width='100%'>
        <InputTrimThreshold />
        <TrimBackground />
      </Flex>
      <CheckboxTrimLineArt />
    </>
  </TabResizeSection>
)
