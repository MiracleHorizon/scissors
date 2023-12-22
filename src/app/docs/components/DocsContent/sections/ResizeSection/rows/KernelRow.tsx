import { Text } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_RESIZE_KERNEL } from '@server/Sharp'

export function KernelRow() {
  return (
    <DocsTableRow
      label='Kernel'
      description={<Text as='p'>The kernel to use for image reduction.</Text>}
      defaultValue={capitalize(DEFAULT_RESIZE_KERNEL)}
    />
  )
}
