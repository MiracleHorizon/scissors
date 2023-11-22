import { DocsSection } from '../DocsSection'
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

export function ResizeSection() {
  return (
    <DocsSection title='Resize'>
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
