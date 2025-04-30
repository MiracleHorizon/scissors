import { useState } from 'react'
import { Flex, ScrollArea } from '@radix-ui/themes'

import { DEFAULT_TINT_COLOR } from '@scissors/sharp'
import { ColorField, ColorSwatch } from '@/shared/ui'
import { themeColors } from '@/shared/radix'
import styles from './TintField.module.css'

export const TintField = () => {
  const [tint, setTint] = useState(DEFAULT_TINT_COLOR)

  return (
    <Flex align='end' gapX='2'>
      <ColorField label='Tint' value={tint} onValueChange={setTint} />

      <ScrollArea type='hover' className={styles.scrollArea}>
        <Flex height='32px' gapX='1'>
          {themeColors.slice(0, 9).map(({ color, hex }) => (
            <ColorSwatch key={color} size='30px' color={hex} onClick={() => setTint(hex)} />
          ))}
        </Flex>
      </ScrollArea>
    </Flex>
  )
}
