import { DocsSection } from '@app/docs/components/DocsSection'
import { AngleRow } from './AngleRow'
import { BackgroundRow } from './BackgroundRow'
import { DOCS_ANCHOR_ROTATE } from '@site/paths'

export const RotateSection = () => (
  <DocsSection title='Rotate' hash={DOCS_ANCHOR_ROTATE}>
    <>
      <AngleRow />
      <BackgroundRow />
    </>
  </DocsSection>
)
