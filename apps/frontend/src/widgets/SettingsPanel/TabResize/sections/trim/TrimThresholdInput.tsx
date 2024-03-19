import { MAX_TRIM_THRESHOLD, MIN_TRIM_THRESHOLD } from '@scissors/sharp'

import { OptionNumberInput } from '@components/OptionNumberInput'
import { useTrimStore } from '@stores/trim'

export function TrimThresholdInput() {
  const threshold = useTrimStore(state => state.threshold)
  const setThreshold = useTrimStore(state => state.setThreshold)

  const handleSetThreshold = (value: number | null) => setThreshold(value)

  return (
    <OptionNumberInput
      value={threshold}
      setValue={handleSetThreshold}
      label='Threshold'
      placeholder='Threshold'
      min={MIN_TRIM_THRESHOLD}
      max={MAX_TRIM_THRESHOLD}
      step={1}
    />
  )
}
