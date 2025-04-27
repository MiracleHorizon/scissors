import { Text } from '@radix-ui/themes'
import { DEFAULT_TRIM_THRESHOLD } from '@scissors/sharp'

import { DocsTableRow } from '@pages/docs/components/DocsTable/DocsTableRow'

export const ThresholdRow = () => (
  <DocsTableRow
    label='threshold'
    description={<Text as='p'>Allowed difference from the above color.</Text>}
    defaultValue={DEFAULT_TRIM_THRESHOLD}
  />
)
