'use client'

import { Flex } from '@radix-ui/themes'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { SelectFormat } from './SelectFormat'

export function Format() {
  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        <OptionSectionHeader title='Convert format' />
        <SelectFormat />
      </section>
    </Flex>
  )
}
