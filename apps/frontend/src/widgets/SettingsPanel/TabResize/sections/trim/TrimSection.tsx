import { Flex } from '@radix-ui/themes'

import { TrimHeader } from './TrimHeader'
import { TrimBackground } from './TrimBackground'
import { TrimThresholdInput } from './TrimThresholdInput'
import { TabResizeSection } from '../../TabResizeSection'
import { CheckboxTrimLineArt } from './CheckboxTrimLineArt'

export const TrimSection = () => (
  <TabResizeSection>
    <>
      <TrimHeader />
      <Flex direction='column' gap='2' width='100%'>
        <TrimThresholdInput />
        <TrimBackground />
      </Flex>
      <CheckboxTrimLineArt />
    </>
  </TabResizeSection>
)
