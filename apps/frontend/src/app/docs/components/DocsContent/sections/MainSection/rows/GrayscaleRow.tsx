import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function GrayscaleRow() {
  return (
    <DocsTableRow
      label='grayscale'
      description={
        <Text as='p'>
          Convert to <Code variant='ghost'>8-bit</Code> grayscale; <Code variant='ghost'>256</Code>{' '}
          shades of gray.
          <br />
          An alpha channel may be present, and will be unchanged by the operation.
        </Text>
      }
      defaultValue='disabled'
    />
  )
}
