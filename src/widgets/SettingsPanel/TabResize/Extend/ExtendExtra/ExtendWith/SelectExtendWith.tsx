import { useCallback, useEffect } from 'react'

import { OptionSelect } from '@components/OptionSelect'
import { useExtendStore } from '@stores/extend'
import { useOutputStore } from '@stores/output'
import { DEFAULT_EXTEND_WITH, ExtendWith, ImageFileFormat } from '@server/Sharp'

const defaultData = [
  {
    value: Object.values(ExtendWith)
  }
]
// ExtendWith.REPEAT and ExtendWith.MIRROR throws "pngload_buffer: out of order read at line ..." error
// Bug or feature? sharp version: 0.32.6 - 0.33.1; libvips version: 8.15.0
const unsupportedPNGExtendWith = [ExtendWith.REPEAT, ExtendWith.MIRROR]
const dataForPNG = [
  {
    value: [ExtendWith.BACKGROUND, ExtendWith.COPY]
  }
]

export function SelectExtendWith() {
  const outputFormat = useOutputStore(state => state.outputFormat)
  const extendWith = useExtendStore(state => state.extendWith)

  const setExtendWith = useExtendStore(state => state.setExtendWith)

  const handleSetExtendWith = useCallback(
    (value: ExtendWith) => setExtendWith(value),
    [setExtendWith]
  )

  useEffect(() => {
    if (!outputFormat || !extendWith || outputFormat !== ImageFileFormat.PNG) return

    if (unsupportedPNGExtendWith.includes(extendWith)) {
      setExtendWith(ExtendWith.BACKGROUND)
    }
  }, [outputFormat, extendWith, setExtendWith])

  return (
    <OptionSelect
      label='Extend with'
      value={extendWith ?? DEFAULT_EXTEND_WITH}
      defaultValue={DEFAULT_EXTEND_WITH}
      onValueChange={handleSetExtendWith}
      data={!outputFormat || outputFormat !== ImageFileFormat.PNG ? defaultData : dataForPNG}
    />
  )
}
