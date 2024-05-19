import { Tabs } from '@radix-ui/themes'

import { Options } from './options'
import { TOOLBAR_TAB } from '@stores/tabs'

export const TabConvert = () => (
  <Tabs.Content value={TOOLBAR_TAB.CONVERT}>
    <Options />
  </Tabs.Content>
)
