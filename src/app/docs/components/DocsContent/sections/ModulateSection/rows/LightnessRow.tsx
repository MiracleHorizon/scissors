import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { MIN_LIGHTNESS } from '@libs/Sharp'

export function LightnessRow() {
  return (
    <DocsTableRow
      label='Lightness'
      description={
        <Text as='p'>
          The lightness of the image. The value ranges from{' '}
          <Code variant='ghost'>{MIN_LIGHTNESS}</Code> to <Code variant='ghost'>100</Code>.
        </Text>
      }
      defaultValue={`${MIN_LIGHTNESS}%`}
    />
  )
}
