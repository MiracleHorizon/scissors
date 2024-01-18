import { DocsSection } from '../../DocsSection'
import { PositionsRow } from './rows/PositionsRow'
import { ExtendWithRow } from './rows/ExtendWithRow'
import { BackgroundRow } from './rows/BackgroundRow'
import { DOCS_HASH } from '@lib/router'

export function ExtendSection() {
  return (
    <DocsSection title='Extend' hash={DOCS_HASH.EXTEND}>
      <>
        <PositionsRow />
        <ExtendWithRow />
        <BackgroundRow />
      </>
    </DocsSection>
  )
}
