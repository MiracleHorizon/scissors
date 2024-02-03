import { DocsSection } from '../../DocsSection'
import { AngleRow, BackgroundRow } from './rows'
import { DOCS_HASH_ROTATE } from '@site/paths'

export const RotateSection = () => (
  <DocsSection title='Rotate' hash={DOCS_HASH_ROTATE}>
    <>
      <AngleRow />
      <BackgroundRow />
    </>
  </DocsSection>
)
