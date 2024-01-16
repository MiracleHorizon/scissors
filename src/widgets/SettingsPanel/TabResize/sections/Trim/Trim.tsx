import { Flex } from '@radix-ui/themes'

import { TrimHeader } from './TrimHeader'
import { TrimBackground } from './TrimBackground'
import { TrimThresholdInput } from './TrimThresholdInput'
import { CheckboxTrimLineArt } from './CheckboxTrimLineArt'
import { TabResizeSection } from '@widgets/SettingsPanel/TabResize/TabResizeSection'

export const Trim = () => (
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
