import { SegmentedControl } from '@radix-ui/themes'

import { Label } from '@ui/Label'
import { DRAW_ERASE_RADIUS, type DrawEraseRadius, useDrawStore } from '@stores/draw'
import { getRadixColorVar } from '@lib/theme'

export const EraseRadius = () => {
  const eraseRadius = useDrawStore(state => state.eraseRadius)
  const setEraseRadius = useDrawStore(state => state.setEraseRadius)

  const onValueChange = (newValue: string) => setEraseRadius(parseInt(newValue) as DrawEraseRadius)

  return (
    <Label label='Erase Radius'>
      <SegmentedControl.Root value={eraseRadius.toString()} onValueChange={onValueChange}>
        {Object.values(DRAW_ERASE_RADIUS).map(value => (
          <SegmentedControl.Item key={value} value={value.toString()}>
            <div
              style={{
                width: `${value * 2}px`,
                height: `${value * 2}px`,
                borderRadius: '50%',
                backgroundColor: getRadixColorVar('gray', 12)
              }}
            />
          </SegmentedControl.Item>
        ))}
      </SegmentedControl.Root>
    </Label>
  )
}
