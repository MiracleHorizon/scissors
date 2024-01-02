import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_EXTEND_WITH } from '@server/Sharp'

export function ExtendWithRow() {
  return (
    <DocsTableRow
      label='Extend with'
      description={
        <Text as='p'>
          Populate new pixels using one of variants: <Code variant='ghost'>background</Code>,{' '}
          <Code variant='ghost'>copy</Code>, <Code variant='ghost'>repeat</Code>,{' '}
          <Code variant='ghost'>mirror</Code>.
        </Text>
      }
      defaultValue={DEFAULT_EXTEND_WITH}
    />
  )
}
