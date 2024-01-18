import { DocsSection } from '../../DocsSection'
import { AlphaRow, ValueRow } from './rows'
import { DOCS_HASH } from '@lib/router'

export function NegateSection() {
  return (
    <DocsSection title='Negate' hash={DOCS_HASH.NEGATE}>
      <>
        <ValueRow />
        <AlphaRow />
      </>
    </DocsSection>
  )
}
