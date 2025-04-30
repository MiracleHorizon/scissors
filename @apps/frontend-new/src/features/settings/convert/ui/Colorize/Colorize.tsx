import { Flex, ScrollArea, Separator } from '@radix-ui/themes'
import { useState } from 'react'

import { DEFAULT_TINT_COLOR, GAMMA_STEP, MAX_GAMMA, MIN_GAMMA } from '@scissors/sharp'

import { ColorField, ColorSwatch, Slider } from '@/shared/ui'
import { themeColors } from '@/shared/radix'

import styles from './Colorize.module.css'

export const Colorize = () => {
  const [tint, setTint] = useState<string>(DEFAULT_TINT_COLOR)
  const [gamma, setGamma] = useState<number | null>(MIN_GAMMA)

  return (
    <Flex direction='column' gapY='2'>
      {/* TODO: Add grayscale 
        disabled={isGrayscaleEnabled}
      */}
      <Slider
        label='Gamma'
        value={[gamma]}
        defaultValue={[MIN_GAMMA]}
        step={GAMMA_STEP}
        min={MIN_GAMMA}
        max={MAX_GAMMA}
        onValueChange={values => setGamma(values[0] ?? null)}
      />

      <Separator size='4' />

      <Flex align='end' gapX='2'>
        <ColorField label='Tint' value={tint} onValueChange={setTint} />

        <ScrollArea type='hover' className={styles.tintPresetsScrollArea}>
          <Flex height='32px' gapX='1'>
            {themeColors.slice(0, 9).map(({ color, hex }) => (
              <ColorSwatch key={color} size='30px' color={hex} onClick={() => setTint(hex)} />
            ))}
          </Flex>
        </ScrollArea>
      </Flex>
    </Flex>
  )
}
