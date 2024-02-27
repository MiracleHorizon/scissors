import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export const BackgroundRow = () => (
  <DocsTableRow
    label='background'
    description={
      <Text as='p'>The color that will be &quot;trimmed&quot; from the edges of the image.</Text>
    }
    defaultValue={'"top-left pixel"'}
  />
)
