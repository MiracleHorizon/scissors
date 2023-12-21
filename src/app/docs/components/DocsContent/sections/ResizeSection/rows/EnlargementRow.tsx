import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_WITHOUT_ENLARGEMENT } from '@libs/Sharp'

export function EnlargementRow() {
  return (
    <DocsTableRow
      label='Enlargement'
      description={
        <Text as='p'>
          Do not scale up if the width or height are already less than the target dimensions.
          <br />
          This may result in output dimensions smaller than the target dimensions.
        </Text>
      }
      defaultValue={DEFAULT_WITHOUT_ENLARGEMENT ? 'Enabled' : 'Disabled'}
    />
  )
}