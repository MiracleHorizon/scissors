import { DocsTableRow } from '@pages/docs/components/DocsTable/DocsTableRow'
import { Text } from '@radix-ui/themes'

export const AlphaRow = () => (
  <DocsTableRow
    label='alpha'
    description={<Text as='p'>Alpha - whether to negate any alpha channel.</Text>}
    defaultValue='disabled'
  />
)
