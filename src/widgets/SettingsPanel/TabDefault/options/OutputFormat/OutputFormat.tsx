import { Flex } from '@radix-ui/themes'

import { SelectOutputFormat } from './SelectOutputFormat'

export function OutputFormat() {
  return (
    <Flex asChild width='max-content' align='start' direction='column' gap='2'>
      <section>
        <SelectOutputFormat />
      </section>
    </Flex>
  )
}
