import { ExtractHeader } from './extract-header'
import { ExtractContent } from './extract-content'
import { TabResizeSection } from '../../tab-resize-section'

export const ExtractSection = () => (
  <TabResizeSection>
    <>
      <ExtractHeader />
      <ExtractContent />
    </>
  </TabResizeSection>
)
