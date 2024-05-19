import { DEFAULT_TRIM_THRESHOLD, MAX_TRIM_THRESHOLD, MIN_TRIM_THRESHOLD } from '@scissors/sharp'

import { NumberInput } from '@components/number-input'
import { useTrimStore } from '@stores/trim'

export function InputTrimThreshold() {
  const threshold = useTrimStore(state => state.threshold)
  const setThreshold = useTrimStore(state => state.setThreshold)

  const handleSetThreshold = (value: number | null) => setThreshold(value)

  return (
    <NumberInput
      value={threshold}
      setValue={handleSetThreshold}
      label='Threshold'
      placeholder={DEFAULT_TRIM_THRESHOLD.toString()}
      min={MIN_TRIM_THRESHOLD}
      max={MAX_TRIM_THRESHOLD}
      step={1}
    />
  )
}
