import { FlipRow } from './FlipRow'
import { FlopRow } from './FlopRow'
import { GrayscaleRow } from './GrayscaleRow'
import { BlurRow } from './BlurRow'
import { NormaliseRow } from './NormaliseRow'
import { TintRow } from './TintRow'
import { GammaRow } from './GammaRow'
import { DOCS_ANCHOR_MAIN } from '@site/paths'
import { DocsSection } from '@pages/docs/components/DocsSection'

export const MainSection = () => (
  <DocsSection title='Main' hash={DOCS_ANCHOR_MAIN}>
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
