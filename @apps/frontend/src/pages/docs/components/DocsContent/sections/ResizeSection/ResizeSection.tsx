import { WidthRow } from './WidthRow'
import { HeightRow } from './HeightRow'
import { FitRow } from './FitRow'
import { KernelRow } from './KernelRow'
import { PositionRow } from './PositionRow'
import { BackgroundRow } from './BackgroundRow'
import { EnlargementRow } from './EnlargementRow'
import { ReductionRow } from './ReductionRow'
import { FastShrinkRow } from './FastShrinkRow'
import { DOCS_ANCHOR_RESIZE } from '@site/paths'
import { DocsSection } from '@pages/docs/components/DocsSection'

export const ResizeSection = () => (
  <DocsSection title='Resize' hash={DOCS_ANCHOR_RESIZE}>
    <>
      <WidthRow />
      <HeightRow />
      <FitRow />
      <KernelRow />
      <PositionRow />
      <BackgroundRow />
      <EnlargementRow />
      <ReductionRow />
      <FastShrinkRow />
    </>
  </DocsSection>
)
