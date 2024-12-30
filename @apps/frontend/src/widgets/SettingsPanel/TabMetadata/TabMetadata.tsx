import { Tabs } from '@radix-ui/themes'

import { TabMetadataContent } from './TabMetadataContent'
import { TOOLBAR_TAB } from '@stores/tabs'

export const TabMetadata = () => (
  <Tabs.Content value={TOOLBAR_TAB.METADATA}>
    <TabMetadataContent />
  </Tabs.Content>
)
