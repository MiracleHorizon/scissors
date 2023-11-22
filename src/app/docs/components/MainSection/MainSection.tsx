import { DocsSection } from '../DocsSection'
import {
  BlurRow,
  FlipRow,
  FlopRow,
  NegateAlphaRow,
  NegateRow,
  NormaliseRow,
  RotateAngleRow,
  RotateBackgroundRow
} from './rows'

export function MainSection() {
  return (
    <DocsSection title='Main'>
      <>
        <FlipRow />
        <FlopRow />
        <NegateRow />
        <NegateAlphaRow />
        <BlurRow />
        <RotateAngleRow />
        <RotateBackgroundRow />
        <NormaliseRow />
      </>
    </DocsSection>
  )
}
