import { Flex, Separator } from '@radix-ui/themes'

import { BasicOptions } from './Basic'
import { Negate } from './Negate'

const SectionSeparator = () => <Separator my='1' size='4' />

export function Options() {
  return (
    <Flex gap='2' direction='column' my='4' py='2'>
      <BasicOptions />
      <SectionSeparator />
      <Negate />
    </Flex>
  )
}
