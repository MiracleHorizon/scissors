import { DocsSection } from '../../DocsSection'
import { AlphaRow, ValueRow } from './rows'
import { DOCS_HASH_NEGATE } from '@site/paths'

export const NegateSection = () => (
  <DocsSection title='Negate' hash={DOCS_HASH_NEGATE}>
    <>
      <ValueRow />
      <AlphaRow />
    </>
  </DocsSection>
)
