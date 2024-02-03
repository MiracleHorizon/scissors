import { DocsSection } from '../../DocsSection'
import { BlurRow, FlipRow, FlopRow, GammaRow, GrayscaleRow, NormaliseRow, TintRow } from './rows'
import { DOCS_HASH_MAIN } from '@site/paths'

export const MainSection = () => (
  <DocsSection title='Main' hash={DOCS_HASH_MAIN}>
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
