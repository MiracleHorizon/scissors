import { Code, Text } from '@radix-ui/themes'
import { MAX_SATURATION, MIN_SATURATION } from '@scissors/sharp'

import { DocsTableRow } from '../../../DocsTable/DocsTableRow'

export const SaturationRow = () => (
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
