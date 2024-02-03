import { DocsSection } from '../../DocsSection'
import {
  BackgroundRow,
  EnlargementRow,
  FastShrinkRow,
  FitRow,
  HeightRow,
  KernelRow,
  PositionRow,
  ReductionRow,
  WidthRow
} from './rows'
import { DOCS_HASH_RESIZE } from '@site/paths'

export const ResizeSection = () => (
  <DocsSection title='Resize' hash={DOCS_HASH_RESIZE}>
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
