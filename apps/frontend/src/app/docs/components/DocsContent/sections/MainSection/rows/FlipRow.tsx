import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function FlipRow() {
  return (
    <DocsTableRow
      label='flip'
      description={
        <Text as='p'>
          <Text as='span'>
            Mirror the image vertically <Code variant='ghost'>(up-down)</Code> about the x-axis.
          </Text>
          <br />
          <Text as='span'>This operation does not work correctly with multipage images.</Text>
        </Text>
      }
      defaultValue='disabled'
    />
  )
}
