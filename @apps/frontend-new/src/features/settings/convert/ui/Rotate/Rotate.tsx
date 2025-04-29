import { useState } from 'react'
import { Flex } from '@radix-ui/themes'

import {
  DEFAULT_ROTATE_ANGLE,
  DEFAULT_ROTATE_BACKGROUND,
  MAX_ROTATE_ANGLE,
  MIN_ROTATE_ANGLE
} from '@scissors/sharp'

import { Checkbox, ColorField, Slider } from '@/shared/ui'

export const Rotate = () => {
  const [angle, setAngle] = useState<number | null>(DEFAULT_ROTATE_ANGLE)
  const [rotateBackground, setRotateBackground] = useState<string | null>(DEFAULT_ROTATE_BACKGROUND)
  const [withDominantBackground, setWithDominantBackground] = useState(false)

  return (
    <Flex direction='column' mt='4' align='start' gap='4' width='100%'>
      <Slider
        float
        valueSign='°'
        value={[angle]}
        defaultValue={[DEFAULT_ROTATE_ANGLE]}
        min={MIN_ROTATE_ANGLE}
        max={MAX_ROTATE_ANGLE}
        onValueChange={values => setAngle(values[0] ?? null)}
      />

      <Flex width='100%' direction='column' justify='between' gap='3'>
        <ColorField
          label='Fallback background'
          value={rotateBackground ?? ''}
          defaultValue={DEFAULT_ROTATE_BACKGROUND}
          disabled={withDominantBackground}
          onValueChange={setRotateBackground}
        />
        <Checkbox
          label='Use dominant background'
          checked={withDominantBackground}
          onClick={() => setWithDominantBackground(prevState => !prevState)}
        />
      </Flex>
    </Flex>
  )
}
