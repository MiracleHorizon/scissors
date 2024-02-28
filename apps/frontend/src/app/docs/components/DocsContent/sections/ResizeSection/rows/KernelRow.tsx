import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_RESIZE_KERNEL } from '@server/sharp'

export function KernelRow() {
  return (
    <DocsTableRow
      label='kernel'
      description={<Text as='p'>The kernel to use for image reduction.</Text>}
      defaultValue={`"${DEFAULT_RESIZE_KERNEL}"`}
    />
  )
}
