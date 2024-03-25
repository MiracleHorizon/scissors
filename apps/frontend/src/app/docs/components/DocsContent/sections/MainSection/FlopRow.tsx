import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '@app/docs/components/DocsTable/DocsTableRow'

export function FlopRow() {
  return (
    <DocsTableRow
      label='flop'
      description={
        <Text as='p'>
          Mirror the image horizontally <Code variant='ghost'>(left-right)</Code> about the y-axis.
        </Text>
      }
      defaultValue='disabled'
    />
  )
}
