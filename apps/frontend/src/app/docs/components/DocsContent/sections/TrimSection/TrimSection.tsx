import { DocsSection } from '../../DocsSection'
import { BackgroundRow, ThresholdRow, LineArtSection } from './rows'
import { DOCS_HASH_TRIM } from '@site/paths'

export const TrimSection = () => (
  <DocsSection title='Trim' hash={DOCS_HASH_TRIM}>
    <>
      <ThresholdRow />
      <BackgroundRow />
      <LineArtSection />
    </>
  </DocsSection>
)
