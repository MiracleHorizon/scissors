import { useCallback, useEffect } from 'react'

import {
  DEFAULT_EXTEND_WITH,
  EXTEND_WITH,
  type ExtendWith,
  IMAGE_FILE_FORMAT
} from '@scissors/sharp'

import { Select, type SelectData } from '@design-system/Select'
import { useExtendStore } from '@stores/extend'
import { useOutputStore } from '@stores/output'

const defaultData: SelectData = [
  {
    value: Object.values(EXTEND_WITH)
  }
] as const
// ExtendWith.REPEAT and ExtendWith.MIRROR throws "pngload_buffer: out of order read at line ..." error
// Bug or feature? sharp version: 0.32.5(6) - 0.33.1; libvips version: 8.15.0
const unsupportedPNGExtendWith: string[] = [EXTEND_WITH.REPEAT, EXTEND_WITH.MIRROR]
const dataForPNG: SelectData = [
  {
    value: [EXTEND_WITH.BACKGROUND, EXTEND_WITH.COPY]
  }
] as const

export function SelectExtendWith() {
  const outputFormat = useOutputStore(state => state.outputFormat)
  const extendWith = useExtendStore(state => state.extendWith)

  const setExtendWith = useExtendStore(state => state.setExtendWith)

  const handleSetExtendWith = useCallback(
    (value: ExtendWith) => setExtendWith(value),
    [setExtendWith]
  )

  useEffect(() => {
    if (!outputFormat || !extendWith || outputFormat !== IMAGE_FILE_FORMAT.PNG) return

    if (unsupportedPNGExtendWith.includes(extendWith)) {
      setExtendWith(EXTEND_WITH.BACKGROUND)
    }
  }, [outputFormat, extendWith, setExtendWith])

  return (
    <Select
      label='Extend with'
      value={extendWith ?? DEFAULT_EXTEND_WITH}
      defaultValue={DEFAULT_EXTEND_WITH}
      onValueChange={handleSetExtendWith}
      data={!outputFormat || outputFormat !== IMAGE_FILE_FORMAT.PNG ? defaultData : dataForPNG}
    />
  )
}
