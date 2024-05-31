import { IMAGE_FILE_FORMAT, type ImageFileFormat } from '@scissors/sharp'

import { Select, type SelectData } from '@design-system/Select'
import { useOutputStore } from '@stores/output'

const data: SelectData = [
  {
    label: 'Output Format',
    value: Object.values(IMAGE_FILE_FORMAT)
  }
] as const

export const SelectOutputFormat = () => {
  const outputFormat = useOutputStore(state => state.outputFormat)
  const setOutputFormat = useOutputStore(state => state.setOutputFormat)

  const handleChangeOutputFormat = (value: ImageFileFormat) => setOutputFormat(value)

  if (!outputFormat) {
    return null
  }

  return (
    <Select
      label='Output Format'
      valueCapitalize={false}
      value={outputFormat}
      data={data}
      triggerCySelector='select-output-format-trigger'
      contentCySelector='select-output-format-content'
      onValueChange={handleChangeOutputFormat}
    />
  )
}
