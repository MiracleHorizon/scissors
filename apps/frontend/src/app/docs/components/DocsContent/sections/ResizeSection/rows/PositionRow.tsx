import { Code, Text } from '@radix-ui/themes'
import { DEFAULT_RESIZE_POSITION, RESIZE_FIT } from '@scissors/sharp'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function PositionRow() {
  return (
    <DocsTableRow
      label='position'
      description={
        <Text as='p'>
          A <Code variant='ghost'>position</Code> or <Code variant='ghost'>gravity</Code> to use
          when <Text weight='medium'>fit</Text> is <Code>&quot;{RESIZE_FIT.COVER}&quot;</Code> or{' '}
          <Code>&quot;{RESIZE_FIT.CONTAIN}&quot;</Code>.
        </Text>
      }
      defaultValue={`"${DEFAULT_RESIZE_POSITION}"`}
    />
  )
}
