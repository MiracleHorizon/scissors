import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { MAX_BRIGHTNESS, MIN_BRIGHTNESS } from '@libs/Sharp'

export function BrightnessRow() {
  return (
    <DocsTableRow
      label='Brightness'
      description={
        <Text as='p'>
          The brightness of the image. The value ranges from{' '}
          <Code variant='ghost'>{MIN_BRIGHTNESS}</Code> to{' '}
          <Code variant='ghost'>{MAX_BRIGHTNESS}</Code>.
        </Text>
      }
      defaultValue={MIN_BRIGHTNESS}
    />
  )
}
