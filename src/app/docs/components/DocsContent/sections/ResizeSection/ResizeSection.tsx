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
import { DOCS_HASH } from '@lib/router'

export function ResizeSection() {
  return (
    <DocsSection title='Resize' hash={DOCS_HASH.RESIZE}>
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
}
