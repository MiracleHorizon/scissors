import { SegmentedControl } from '@radix-ui/themes'

import { Label } from '@ui/Label'
import { DRAW_MODE, useDrawStore } from '@stores/draw'

export const DrawModeControl = () => {
  const mode = useDrawStore(state => state.mode)
  const setMode = useDrawStore(state => state.setMode)

  return (
    <Label label='Draw Mode'>
      <SegmentedControl.Root value={mode} onValueChange={setMode}>
        <SegmentedControl.Item value={DRAW_MODE.PEN}>Pen</SegmentedControl.Item>
        <SegmentedControl.Item value={DRAW_MODE.ERASE}>Erase</SegmentedControl.Item>
      </SegmentedControl.Root>
    </Label>
  )
}
