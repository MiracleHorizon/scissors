import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '@app/docs/components/DocsTable/DocsTableRow'

export const AlphaRow = () => (
  <DocsTableRow
    label='alpha'
    description={<Text as='p'>Alpha - whether to negate any alpha channel.</Text>}
    defaultValue='disabled'
  />
)
