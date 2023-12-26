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
import { DocsHash } from '@lib/router'

export function MainSection() {
  return (
    <DocsSection title='Main' hash={DocsHash.MAIN}>
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
