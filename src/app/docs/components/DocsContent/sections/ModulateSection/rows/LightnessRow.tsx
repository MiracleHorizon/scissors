import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { MAX_LIGHTNESS, MIN_LIGHTNESS } from '@server/sharp'

export function LightnessRow() {
  return (
    <DocsTableRow
      label='lightness'
      description={
        <Text as='p'>
          The lightness of the image. The value ranges from{' '}
          <Code variant='ghost'>{MIN_LIGHTNESS}%</Code> to{' '}
          <Code variant='ghost'>{MAX_LIGHTNESS}%</Code>.
        </Text>
      }
      defaultValue={`${MIN_LIGHTNESS}%`}
    />
  )
}
