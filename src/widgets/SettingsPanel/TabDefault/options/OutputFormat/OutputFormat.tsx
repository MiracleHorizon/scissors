import { Flex } from '@radix-ui/themes'

import { SelectOutputFormat } from './SelectOutputFormat'

export const OutputFormat = () => (
  <Flex asChild align='start' direction='column' gap='2' width='max-content'>
    <section>
      <SelectOutputFormat />
    </section>
  </Flex>
)
