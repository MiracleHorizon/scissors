import { DocsSection } from '@app/docs/components/DocsSection'
import { ValueRow } from './ValueRow'
import { AlphaRow } from './AlphaRow'
import { DOCS_ANCHOR_NEGATE } from '@site/paths'

export const NegateSection = () => (
  <DocsSection title='Negate' hash={DOCS_ANCHOR_NEGATE}>
    <>
      <ValueRow />
      <AlphaRow />
    </>
  </DocsSection>
)
