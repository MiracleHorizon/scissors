import { OptionSelect, type OptionSelectData } from '@components/OptionSelect'
import { aspectRatioList } from './data'
import styles from './SelectExtractAspectRatio.module.css'

const data: OptionSelectData<string> = [
  {
    value: aspectRatioList.map(v => v.displayValue)
  }
]

// TODO: Await radix themes v3 and rework to use radio group / segmented control
export function SelectExtractAspectRatio({ aspectRatio, setAspectRatio }: Props) {
  const value = aspectRatioList.find(v => v.value === aspectRatio)?.displayValue ?? 'No value'

  return (
    <OptionSelect
      label='Aspect Ratio'
      value={value}
      data={data}
      triggerClassName={styles.trigger}
      onValueChange={setAspectRatio}
    />
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  aspectRatio: number
  setAspectRatio: (value: string) => void
}
