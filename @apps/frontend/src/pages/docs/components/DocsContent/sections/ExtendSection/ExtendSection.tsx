import { PositionsRow } from './PositionsRow'
import { ExtendWithRow } from './ExtendWithRow'
import { BackgroundRow } from './BackgroundRow'
import { DOCS_ANCHOR_EXTEND } from '@site/paths'
import { DocsSection } from '@pages/docs/components/DocsSection'

export const ExtendSection = () => (
  <DocsSection title='Extend' hash={DOCS_ANCHOR_EXTEND}>
    <>
      <PositionsRow />
      <ExtendWithRow />
      <BackgroundRow />
    </>
  </DocsSection>
)
