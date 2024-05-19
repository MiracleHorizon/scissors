import { Tabs } from '@radix-ui/themes'

import { TabMetadataContent } from './tab-metadata-content'
import { TOOLBAR_TAB } from '@stores/tabs'

export const TabMetadata = () => (
  <Tabs.Content value={TOOLBAR_TAB.METADATA}>
    <TabMetadataContent />
  </Tabs.Content>
)
