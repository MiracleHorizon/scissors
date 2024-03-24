import { DocsSection } from '@app/docs/components/DocsSection'
import { PositionsRow } from './PositionsRow'
import { ExtendWithRow } from './ExtendWithRow'
import { BackgroundRow } from './BackgroundRow'
import { DOCS_ANCHOR_EXTEND } from '@site/paths'

export const ExtendSection = () => (
  <DocsSection title='Extend' hash={DOCS_ANCHOR_EXTEND}>
    <>
      <PositionsRow />
      <ExtendWithRow />
      <BackgroundRow />
    </>
  </DocsSection>
)
