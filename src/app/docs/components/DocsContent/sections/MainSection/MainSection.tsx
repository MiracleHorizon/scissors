import { DocsSection } from '../../DocsSection'
import {
  BlurRow,
  FlipRow,
  FlopRow,
  GammaRow,
  GrayscaleRow,
  NegateAlphaRow,
  NegateRow,
  NormaliseRow,
  RotateAngleRow,
  RotateBackgroundRow,
  TintRow
} from './rows'

export function MainSection() {
  return (
    <DocsSection title='Main' hash='#main'>
      <>
        <FlipRow />
        <FlopRow />
        <NegateRow />
        <NegateAlphaRow />
        <GrayscaleRow />
        <BlurRow />
        <RotateAngleRow />
        <RotateBackgroundRow />
        <NormaliseRow />
        <TintRow />
        <GammaRow />
      </>
    </DocsSection>
  )
}
