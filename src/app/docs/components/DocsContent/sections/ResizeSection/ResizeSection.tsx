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
import { DocsHash } from '@lib/router'

export function ResizeSection() {
  return (
    <DocsSection title='Resize' hash={DocsHash.RESIZE}>
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
