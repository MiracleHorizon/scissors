import { DocsSection } from '../../DocsSection'
import { PositionsRow } from './rows/PositionsRow'
import { ExtendWithRow } from './rows/ExtendWithRow'
import { BackgroundRow } from './rows/BackgroundRow'
import { DocsHash } from '@lib/router'

export function ExtendSection() {
  return (
    <DocsSection title='Extend' hash={DocsHash.EXTEND}>
      <>
        <PositionsRow />
        <ExtendWithRow />
        <BackgroundRow />
      </>
    </DocsSection>
  )
}
