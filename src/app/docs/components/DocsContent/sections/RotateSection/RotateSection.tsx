import { DocsSection } from '../../DocsSection'
import { AngleRow, BackgroundRow } from './rows'
import { DOCS_HASH } from '@lib/router'

export function RotateSection() {
  return (
    <DocsSection title='Rotate' hash={DOCS_HASH.ROTATE}>
      <>
        <AngleRow />
        <BackgroundRow />
      </>
    </DocsSection>
  )
}
