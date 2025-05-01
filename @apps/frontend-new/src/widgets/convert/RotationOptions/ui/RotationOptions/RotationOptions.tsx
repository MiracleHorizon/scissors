import { Flex } from '@radix-ui/themes'

import { AngleSlider, RotationBackgroundField } from '@/features/settings/convert'

export const RotationOptions = () => (
  <Flex direction='column' align='start' gap='4' width='100%'>
    <AngleSlider />
    <RotationBackgroundField />
  </Flex>
)
