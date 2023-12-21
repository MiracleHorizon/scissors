import { Code, Text } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_RESIZE_POSITION, ResizeFit } from '@libs/Sharp'

export function PositionRow() {
  return (
    <DocsTableRow
      label='Position'
      description={
        <Text as='p'>
          A position or gravity to use when <Text weight='medium'>fit</Text> is{' '}
          <Code variant='ghost'>{ResizeFit.COVER}</Code> or{' '}
          <Code variant='ghost'>{ResizeFit.CONTAIN}</Code>.
        </Text>
      }
      defaultValue={capitalize(DEFAULT_RESIZE_POSITION)}
    />
  )
}
