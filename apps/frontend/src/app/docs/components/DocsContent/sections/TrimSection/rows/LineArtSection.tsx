import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_TRIM_LINE_ART } from '@server/sharp'

export const LineArtSection = () => (
  <DocsTableRow
    label='line art'
    description={
      <Text as='p'>
        Does the input more closely resemble line art (e.g. vector) rather than being photographic?.
      </Text>
    }
    defaultValue={DEFAULT_TRIM_LINE_ART ? 'enabled' : 'disabled'}
  />
)