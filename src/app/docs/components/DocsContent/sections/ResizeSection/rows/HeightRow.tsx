import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { MAX_RESIZE_HEIGHT, MIN_RESIZE_SIZE } from '@server/sharp'

export function HeightRow() {
  return (
    <DocsTableRow
      label='height'
      description={
        <>
          <Text as='p'>How many pixels high the resultant image should be.</Text>
          <Text as='p'>
            The value ranges from <Code variant='ghost'>{MIN_RESIZE_SIZE}</Code> to{' '}
            <Code variant='ghost'>{MAX_RESIZE_HEIGHT}</Code> pixels.
          </Text>
        </>
      }
    />
  )
}
