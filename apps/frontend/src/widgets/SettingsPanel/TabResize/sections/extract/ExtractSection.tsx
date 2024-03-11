import { ExtractHeader } from './ExtractHeader'
import { ExtractContent } from './ExtractContent'
import { TabResizeSection } from '../../TabResizeSection'

export const ExtractSection = () => (
  <TabResizeSection>
    <>
      <ExtractHeader />
      <ExtractContent />
    </>
  </TabResizeSection>
)
