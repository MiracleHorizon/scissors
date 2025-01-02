import { TrimHeader } from './TrimHeader'
import { TrimContent } from './TrimContent'
import { TabResizeSection } from '../../TabResizeSection'

export const TrimSection = () => (
  <TabResizeSection>
    <>
      <TrimHeader />
      <TrimContent />
    </>
  </TabResizeSection>
)
