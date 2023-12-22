import dynamic from 'next/dynamic'
import { Code, Strong, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_FAST_SHRINK } from '@server/Sharp'

const MoirePatternPopover = dynamic(() => import('./MoirePatternPopover'), {
  ssr: false,
  loading: () => <Strong>moiré pattern</Strong>
})

export function FastShrinkRow() {
  return (
    <DocsTableRow
      label='Fast shrink'
      description={
        <Text as='p'>
          Take greater advantage of the <Code variant='ghost'>JPEG</Code> and{' '}
          <Code variant='ghost'>WebP</Code> shrink-on-load feature, which can lead to a slight{' '}
          <MoirePatternPopover /> or round-down of an auto-scaled dimension.
        </Text>
      }
      defaultValue={DEFAULT_FAST_SHRINK ? 'Enabled' : 'Disabled'}
    />
  )
}
