import type { CSSProperties } from 'react'

import { OptionSelect, type OptionSelectData } from '@components/OptionSelect'
import { aspectRatioList } from './data'

const data: OptionSelectData<string> = [
  {
    value: aspectRatioList.map(v => v.displayValue)
  }
]
const triggerStyle: CSSProperties = {
  maxWidth: '100px'
}

// TODO: Await radix themes v3 and rework to use radio group / segmented control
export function SelectExtractAspectRatio({ aspectRatio, setAspectRatio }: Props) {
  return (
    <OptionSelect
      label='Aspect Ratio'
      value={aspectRatioList.find(v => v.value === aspectRatio)?.displayValue ?? 'No value'}
      data={data}
      triggerStyle={triggerStyle}
      onValueChange={setAspectRatio}
    />
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  aspectRatio: number
  setAspectRatio: (value: string) => void
}
