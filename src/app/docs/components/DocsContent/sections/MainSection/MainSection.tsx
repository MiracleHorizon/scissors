import { DocsSection } from '../../DocsSection'
import { BlurRow, FlipRow, FlopRow, GammaRow, GrayscaleRow, NormaliseRow, TintRow } from './rows'
import { DocsHash } from '@lib/router'

export function MainSection() {
  return (
    <DocsSection title='Main' hash={DocsHash.MAIN}>
      <>
        <FlipRow />
        <FlopRow />
        <GrayscaleRow />
        <BlurRow />
        <NormaliseRow />
        <TintRow />
        <GammaRow />
      </>
    </DocsSection>
  )
}
