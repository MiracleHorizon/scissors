import { DocsSection } from '../../DocsSection'
import { BlurRow, FlipRow, FlopRow, GammaRow, GrayscaleRow, NormaliseRow, TintRow } from './rows'
import { DOCS_HASH } from '@lib/router'

export function MainSection() {
  return (
    <DocsSection title='Main' hash={DOCS_HASH.MAIN}>
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
