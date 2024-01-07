import { DocsSection } from '../../DocsSection'
import { AngleRow, BackgroundRow } from './rows'
import { DocsHash } from '@lib/router'

export function RotateSection() {
  return (
    <DocsSection title='Rotate' hash={DocsHash.ROTATE}>
      <>
        <AngleRow />
        <BackgroundRow />
      </>
    </DocsSection>
  )
}
