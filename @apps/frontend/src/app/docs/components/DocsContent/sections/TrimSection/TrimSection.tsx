import { DocsSection } from '@app/docs/components/DocsSection'
import { ThresholdRow } from './ThresholdRow'
import { BackgroundRow } from './BackgroundRow'
import { LineArtSection } from './LineArtSection'
import { DOCS_ANCHOR_TRIM } from '@site/paths'

export const TrimSection = () => (
  <DocsSection title='Trim' hash={DOCS_ANCHOR_TRIM}>
    <>
      <ThresholdRow />
      <BackgroundRow />
      <LineArtSection />
    </>
  </DocsSection>
)
