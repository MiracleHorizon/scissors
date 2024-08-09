import { useEffect, useState } from 'react'

import { Label } from '@ui/Label'
import { Slider } from '@design-system/Slider'
import { useDebounce } from '@hooks/useDebounce'
import { useDrawStore } from '@stores/draw'

const DEFAULT_VALUE = 1

export const GlobalAlpha = () => {
  const [value, setValue] = useState(DEFAULT_VALUE)
  const debounceValue = useDebounce(value, 200)

  const setGlobalAlpha = useDrawStore(state => state.setGlobalAlpha)

  const onValueChange = (newValue: number[]) => setValue(newValue[0])

  useEffect(() => {
    setGlobalAlpha(debounceValue)
  }, [debounceValue])

  return (
    <Label label='Opacity'>
      <Slider
        value={[value]}
        defaultValue={[DEFAULT_VALUE]}
        min={0}
        max={1}
        step={0.01}
        onValueChange={onValueChange}
      />
    </Label>
  )
}
