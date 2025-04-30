import { Flex } from '@radix-ui/themes'

import {
  AngleSlider,
  DominantBackgroundCheckbox,
  RotationBackgroundField
} from '@/features/settings/convert'

export const RotationOptions = () => (
  <Flex direction='column' align='start' gap='4' width='100%'>
    <AngleSlider />

    <Flex width='100%' direction='column' justify='between' gap='3'>
      <RotationBackgroundField />
      <DominantBackgroundCheckbox />
    </Flex>
  </Flex>
)
