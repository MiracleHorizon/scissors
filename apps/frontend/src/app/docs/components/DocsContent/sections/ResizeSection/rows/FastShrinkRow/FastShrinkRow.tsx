import dynamic from 'next/dynamic'
import { Code, Strong, Text } from '@radix-ui/themes'
import { DEFAULT_FAST_SHRINK } from '@scissors/sharp'

import { DocsTableRow } from '../../../../DocsSection/DocsTable/DocsTableRow'

const MoirePatternPopover = dynamic(() => import('./MoirePatternPopover'), {
  ssr: false,
  loading: () => <Strong>moiré pattern</Strong>
})

export function FastShrinkRow() {
  return (
    <DocsTableRow
      label='fast shrink'
      description={
        <Text as='p'>
          Take greater advantage of the <Code>&quot;jpeg&quot;</Code> and{' '}
          <Code>&quot;webp&quot;</Code> shrink-on-load feature, which can lead to a slight{' '}
          <MoirePatternPopover /> or round-down of an auto-scaled dimension.
        </Text>
      }
      defaultValue={DEFAULT_FAST_SHRINK ? 'enabled' : 'disabled'}
    />
  )
}
