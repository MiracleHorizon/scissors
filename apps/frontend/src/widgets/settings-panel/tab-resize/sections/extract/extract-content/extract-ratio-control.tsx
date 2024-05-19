import { Flex, Heading, SegmentedControl, Text } from '@radix-ui/themes'

import { aspectRatioList } from './data'
import styles from './extract-ratio-control.module.css'

export function ExtractRatioControl({ aspectRatio, setAspectRatio }: Props) {
  const value = aspectRatioList.find(v => v.value === aspectRatio)?.displayValue ?? 'No value'

  return (
    <Flex width='100%' direction='column'>
      <Heading as='h4' size='3' mb='2' className={styles.title}>
        Aspect Ratio
      </Heading>

      <SegmentedControl.Root mr='auto' value={value} onValueChange={setAspectRatio}>
        {aspectRatioList.map(item => (
          <SegmentedControl.Item key={item.value} value={item.displayValue} className={styles.item}>
            <Text>{item.displayValue}</Text>
          </SegmentedControl.Item>
        ))}
      </SegmentedControl.Root>
    </Flex>
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  aspectRatio: number
  setAspectRatio: (value: string) => void
}
