import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { MAX_SATURATION, MIN_SATURATION } from '@server/Sharp'

export function SaturationRow() {
  return (
    <DocsTableRow
      label='saturation'
      description={
        <Text as='p'>
          The saturation of the image. The value ranges from{' '}
          <Code variant='ghost'>{MIN_SATURATION}</Code> to{' '}
          <Code variant='ghost'>{MAX_SATURATION}</Code>.
        </Text>
      }
      defaultValue={MIN_SATURATION}
    />
  )
}
