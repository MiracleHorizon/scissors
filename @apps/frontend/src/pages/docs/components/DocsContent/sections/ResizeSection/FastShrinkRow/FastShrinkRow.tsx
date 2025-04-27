import { lazy, Suspense } from 'react'
import { Code, Strong, Text } from '@radix-ui/themes'
import { DEFAULT_FAST_SHRINK } from '@scissors/sharp'

import { DocsTableRow } from '../../../../DocsTable/DocsTableRow'

const MoirePatternPopover = lazy(() =>
  import('./MoirePatternPopover').then(mod => ({ default: mod.default }))
)

export const FastShrinkRow = () => (
  <DocsTableRow
    label='fast shrink'
    description={
      <Text as='p'>
        Take greater advantage of the <Code>&quot;jpeg&quot;</Code> and{' '}
        <Code>&quot;webp&quot;</Code> shrink-on-load feature, which can lead to a slight{' '}
        <Suspense fallback={<Strong>moiré pattern</Strong>}>
          <MoirePatternPopover />
        </Suspense>
        or round-down of an auto-scaled dimension.
      </Text>
    }
    defaultValue={DEFAULT_FAST_SHRINK ? 'enabled' : 'disabled'}
  />
)
