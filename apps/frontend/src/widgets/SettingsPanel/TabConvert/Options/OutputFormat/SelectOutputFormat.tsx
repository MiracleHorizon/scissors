import { useCallback } from 'react'

import { OptionSelect, type OptionSelectData } from '@components/OptionSelect'
import { useOutputStore } from '@stores/output'
import { IMAGE_FILE_FORMAT, type ImageFileFormat } from '@server/sharp'

const data: OptionSelectData<ImageFileFormat> = [
  {
    label: 'Output format',
    value: Object.values(IMAGE_FILE_FORMAT)
  }
]

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
    <OptionSelect
      label='Output Format'
      withItemValueCapitalize={false}
      triggerLabelSize='3'
      value={outputFormat}
      data={data}
      onValueChange={handleChangeOutputFormat}
    />
  )
}
