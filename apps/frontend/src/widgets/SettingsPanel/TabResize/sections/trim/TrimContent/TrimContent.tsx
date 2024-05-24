import { Flex } from '@radix-ui/themes'

import { TrimBackground } from './TrimBackground'
import { TrimThresholdInput } from './TrimThresholdInput'
import { CheckboxTrimLineArt } from './CheckboxTrimLineArt'

export const TrimContent = () => (
  <>
    <Flex direction='column' gap='2' width='100%'>
      <TrimThresholdInput />
      <TrimBackground />
    </Flex>
    <CheckboxTrimLineArt />
  </>
)
