import { Flex, Heading, RadioCards, Text } from '@radix-ui/themes'

import { aspectRatioList } from './data'
import styles from './RadioGroupExtractRatio.module.css'

export function RadioGroupExtractRatio({ aspectRatio, setAspectRatio }: Props) {
  const value = aspectRatioList.find(v => v.value === aspectRatio)?.displayValue ?? 'No value'

  return (
    <Flex width='100%' direction='column'>
      <Heading as='h4' size='3' mb='2' className={styles.title}>
        Aspect Ratio
      </Heading>

      <RadioCards.Root
        size='1'
        columns={aspectRatioList.length.toString()}
        gap='2'
        mr='auto'
        value={value}
        onValueChange={setAspectRatio}
      >
        {aspectRatioList.map(item => (
          <RadioCards.Item key={item.value} value={item.displayValue} className={styles.item}>
            <Text>{item.displayValue}</Text>
          </RadioCards.Item>
        ))}
      </RadioCards.Root>
    </Flex>
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  aspectRatio: number
  setAspectRatio: (value: string) => void
}
