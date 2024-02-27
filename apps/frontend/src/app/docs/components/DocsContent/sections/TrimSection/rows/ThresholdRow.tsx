import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_TRIM_THRESHOLD } from '@server/sharp'

export const ThresholdRow = () => (
  <DocsTableRow
    label='threshold'
    description={<Text as='p'>Allowed difference from the above color.</Text>}
    defaultValue={DEFAULT_TRIM_THRESHOLD}
  />
)
