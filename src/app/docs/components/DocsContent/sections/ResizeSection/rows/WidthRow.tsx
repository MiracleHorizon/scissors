import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { MAX_RESIZE_WIDTH, MIN_RESIZE_SIZE } from '@libs/Sharp'

export function WidthRow() {
  return (
    <DocsTableRow
      label='Width'
      description={
        <>
          <Text as='p'>How many pixels wide the resultant image should be.</Text>
          <Text as='p'>
            The value ranges from <Code variant='ghost'>{MIN_RESIZE_SIZE}</Code> to{' '}
            <Code variant='ghost'>{MAX_RESIZE_WIDTH}</Code> pixels.
          </Text>
        </>
      }
      defaultValue='Not set'
    />
  )
}