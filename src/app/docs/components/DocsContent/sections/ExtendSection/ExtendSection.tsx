import { DocsSection } from '../../DocsSection'
import { PositionsRow } from './rows/PositionsRow'
import { ExtendWithRow } from './rows/ExtendWithRow'
import { BackgroundRow } from './rows/BackgroundRow'
import { DOCS_HASH_EXTEND } from '@site/paths'

export const ExtendSection = () => (
  <DocsSection title='Extend' hash={DOCS_HASH_EXTEND}>
    <>
      <PositionsRow />
      <ExtendWithRow />
      <BackgroundRow />
    </>
  </DocsSection>
)
