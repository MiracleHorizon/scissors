import { useEffect, useState } from 'react'

import { ColorField } from '@ui/ColorField'
import { useDrawStore } from '@stores/draw'
import { useDebounce } from '@hooks/useDebounce'

const DEFAULT_VALUE = '#000000'

export const ShadowColor = () => {
  const [value, setValue] = useState(DEFAULT_VALUE)
  const debouncedValue = useDebounce(value, 200)

  const setShadowColor = useDrawStore(state => state.setShadowColor)
  const onValueChange = (newValue: string) => setValue(newValue)

  useEffect(() => {
    setShadowColor(debouncedValue)
  }, [debouncedValue])

  return <ColorField label='Shadow Color' value={value} onValueChange={onValueChange} />
}
