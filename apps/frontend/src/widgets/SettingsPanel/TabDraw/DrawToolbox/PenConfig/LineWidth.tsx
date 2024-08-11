import { SegmentedControl } from '@radix-ui/themes'

import { Label } from '@ui/Label'
import { DRAW_LINE_WIDTH, type DrawLineWidth, useDrawStore } from '@stores/draw'
import { getRadixColorVar } from '@lib/theme'

export const LineWidth = () => {
  const lineWidth = useDrawStore(state => state.lineWidth)
  const setLineWidth = useDrawStore(state => state.setLineWidth)

  const onValueChange = (newValue: string) => setLineWidth(parseInt(newValue) as DrawLineWidth)

  return (
    <Label label='Line Width'>
      <SegmentedControl.Root value={lineWidth.toString()} onValueChange={onValueChange}>
        {Object.values(DRAW_LINE_WIDTH).map(value => (
          <SegmentedControl.Item key={value} value={value.toString()}>
            <div
              style={{
                width: '24px',
                height: `${value}px`,
                backgroundColor: getRadixColorVar('gray', 12)
              }}
            />
          </SegmentedControl.Item>
        ))}
      </SegmentedControl.Root>
    </Label>
  )
}
