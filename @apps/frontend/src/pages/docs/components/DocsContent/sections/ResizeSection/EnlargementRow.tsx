import { Text } from '@radix-ui/themes'
import { DEFAULT_WITHOUT_ENLARGEMENT } from '@scissors/sharp'

import { DocsTableRow } from '../../../DocsTable/DocsTableRow'

export const EnlargementRow = () => (
  <DocsTableRow
    label='enlargement'
    description={
      <Text as='p'>
        Do not scale up if the width or height are already less than the target dimensions.
        <br />
        This may result in output dimensions smaller than the target dimensions.
      </Text>
    }
    defaultValue={DEFAULT_WITHOUT_ENLARGEMENT ? 'enabled' : 'disabled'}
  />
)
