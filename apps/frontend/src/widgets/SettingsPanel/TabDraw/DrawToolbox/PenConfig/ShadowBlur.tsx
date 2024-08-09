import { useEffect, useState } from 'react'

import { Label } from '@ui/Label'
import { Slider } from '@design-system/Slider'
import { useDrawStore } from '@stores/draw'
import { useDebounce } from '@hooks/useDebounce'

const DEFAULT_VALUE = 0

export const ShadowBlur = () => {
  const [value, setValue] = useState(DEFAULT_VALUE)
  const debouncedValue = useDebounce(value, 200)

  const setShadowBlur = useDrawStore(state => state.setShadowBlur)
  const onValueChange = (newValue: number[]) => setValue(newValue[0])

  useEffect(() => {
    setShadowBlur(debouncedValue)
  }, [debouncedValue])

  return (
    <Label label='Shadow Blur'>
      <Slider
        value={[value]}
        defaultValue={[DEFAULT_VALUE]}
        min={0}
        max={20}
        onValueChange={onValueChange}
      />
    </Label>
  )
}
