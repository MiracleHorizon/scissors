import { SegmentedControl } from '@radix-ui/themes'

import { Label } from '@ui/Label'
import { DRAW_LINE_JOIN, type DrawLineJoin, useDrawStore } from '@stores/draw'

export const LineJoin = () => {
  const lineJoin = useDrawStore(state => state.lineJoin)
  const setLineJoin = useDrawStore(state => state.setLineJoin)

  const onValueChange = (newValue: string) => setLineJoin(newValue as DrawLineJoin)

  return (
    <Label label='Line Join'>
      <SegmentedControl.Root value={lineJoin} onValueChange={onValueChange}>
        {Object.values(DRAW_LINE_JOIN).map(value => (
          <SegmentedControl.Item key={value} value={value}>
            {value}
          </SegmentedControl.Item>
        ))}
      </SegmentedControl.Root>
    </Label>
  )
}
