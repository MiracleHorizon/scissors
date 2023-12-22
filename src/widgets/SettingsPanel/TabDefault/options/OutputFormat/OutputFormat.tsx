import { Flex } from '@radix-ui/themes'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { SelectOutputFormat } from './SelectOutputFormat'

export function OutputFormat() {
  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        <OptionSectionHeader title='Convert format' />
        <SelectOutputFormat />
      </section>
    </Flex>
  )
}
