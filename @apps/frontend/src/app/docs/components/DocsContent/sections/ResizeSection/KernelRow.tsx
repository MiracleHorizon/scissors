import { Text } from '@radix-ui/themes'
import { DEFAULT_RESIZE_KERNEL } from '@scissors/sharp'

import { DocsTableRow } from '../../../DocsTable/DocsTableRow'

export const KernelRow = () => (
  <DocsTableRow
    label='kernel'
    description={<Text as='p'>The kernel to use for image reduction.</Text>}
    defaultValue={`"${DEFAULT_RESIZE_KERNEL}"`}
  />
)
