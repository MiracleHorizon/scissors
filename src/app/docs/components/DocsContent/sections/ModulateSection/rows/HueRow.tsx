import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { MAX_HUE, MIN_HUE } from '@server/Sharp'

export function HueRow() {
  return (
    <DocsTableRow
      label='hue'
      description={
        <Text as='p'>
          The angle for the hue rotation of the image. The value ranges from{' '}
          <Code variant='ghost'>{MIN_HUE}°</Code> to <Code variant='ghost'>{MAX_HUE}°</Code>.
        </Text>
      }
      defaultValue={`${MIN_HUE}°`}
    />
  )
}
