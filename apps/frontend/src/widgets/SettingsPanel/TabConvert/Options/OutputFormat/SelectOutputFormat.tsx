import { useCallback } from 'react'

import { IMAGE_FILE_FORMAT, type ImageFileFormat } from '@scissors/sharp'

import { Select, type SelectData } from '@design-system/select'
import { useOutputStore } from '@stores/output'

const data: SelectData = [
  {
    label: 'Output format',
    value: Object.values(IMAGE_FILE_FORMAT)
  }
] as const

export function SelectOutputFormat() {
  const outputFormat = useOutputStore(state => state.outputFormat)
  const setOutputFormat = useOutputStore(state => state.setOutputFormat)

  const handleChangeOutputFormat = useCallback(
    (value: ImageFileFormat) => setOutputFormat(value),
    [setOutputFormat]
  )

  if (!outputFormat) {
    return null
  }

  return (
    <Select
      label='Output Format'
      valueCapitalize={false}
      value={outputFormat}
      data={data}
      onValueChange={handleChangeOutputFormat}
    />
  )
}
