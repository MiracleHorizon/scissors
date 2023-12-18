import { Flex } from '@radix-ui/themes'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { SelectFormat } from './SelectFormat'
import styles from './FormatOption.module.css'

export function FormatOption() {
  return (
    <Flex asChild align='center' gap='2' className={styles.root}>
      <section>
        <OptionSectionHeader title='Format' />
        <SelectFormat />
      </section>
    </Flex>
  )
}
