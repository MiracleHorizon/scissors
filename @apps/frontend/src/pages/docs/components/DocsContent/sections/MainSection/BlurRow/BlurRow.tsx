import { lazy, Suspense } from 'react'
import { Code, Strong, Text } from '@radix-ui/themes'
import { DocsTableRow } from '@pages/docs/components/DocsTable/DocsTableRow'

const GaussianBlurPopover = lazy(() =>
  import('./GaussianBlurPopover').then(mod => ({ default: mod.default }))
)

export const BlurRow = () => (
  <DocsTableRow
    label='blur'
    description={
      <Text as='div'>
        <Text as='p'>
          When used without <Code variant='ghost'>sigma</Code>, performs a fast 3x3 box blur.
        </Text>
        <Text as='div'>
          When a sigma is provided, performs a slower, more accurate
          <Suspense fallback={<Strong>Gaussian</Strong>}>
            <GaussianBlurPopover />
          </Suspense>
          blur.
        </Text>
      </Text>
    }
    defaultValue='disabled'
  />
)
