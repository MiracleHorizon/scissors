import { ValueRow } from './ValueRow'
import { AlphaRow } from './AlphaRow'
import { DOCS_ANCHOR_NEGATE } from '@site/paths'
import { DocsSection } from '@pages/docs/components/DocsSection'

export const NegateSection = () => (
  <DocsSection title='Negate' hash={DOCS_ANCHOR_NEGATE}>
    <>
      <ValueRow />
      <AlphaRow />
    </>
  </DocsSection>
)
