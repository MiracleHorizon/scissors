import { DocsSection } from '../../DocsSection'
import { AlphaRow, ValueRow } from './rows'
import { DocsHash } from '@lib/router'

export function NegateSection() {
  return (
    <DocsSection title='Negate' hash={DocsHash.NEGATE}>
      <>
        <ValueRow />
        <AlphaRow />
      </>
    </DocsSection>
  )
}
