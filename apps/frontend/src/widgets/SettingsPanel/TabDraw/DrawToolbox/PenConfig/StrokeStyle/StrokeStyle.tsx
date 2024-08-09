import { Flex } from '@radix-ui/themes'

import { Label } from '@ui/Label'
import { StrokeStyleItem } from './StrokeStyleItem'
import { primaryColors } from '@lib/theme'

export const StrokeStyle = () => (
  <Label label='Stroke Style'>
    <Flex gapX='1'>
      {primaryColors.map(color => (
        <StrokeStyleItem color={color} />
      ))}
    </Flex>
  </Label>
)
