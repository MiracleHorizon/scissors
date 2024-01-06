import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_RESIZE_POSITION, ResizeFit } from '@server/Sharp'

export function PositionRow() {
  return (
    <DocsTableRow
      label='position'
      description={
        <Text as='p'>
          A <Code variant='ghost'>position</Code> or <Code variant='ghost'>gravity</Code> to use
          when <Text weight='medium'>fit</Text> is <Code>&quot;{ResizeFit.COVER}&quot;</Code> or{' '}
          <Code>&quot;{ResizeFit.CONTAIN}&quot;</Code>.
        </Text>
      }
      defaultValue={`"${DEFAULT_RESIZE_POSITION}"`}
    />
  )
}
