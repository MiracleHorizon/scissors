import dynamic from 'next/dynamic'
import { Tabs } from '@radix-ui/themes'

import { OptionsSkeleton } from '@ui/skeletons/OptionsSkeleton'
import { ToolbarTab } from '@stores/tabs'

const Options = dynamic(() => import('./options').then(mod => mod.Options), {
  ssr: false,
  loading: () => <OptionsSkeleton />
})

export const TabDefault = () => (
  <Tabs.Content value={ToolbarTab.DEFAULT}>
    <Options />
  </Tabs.Content>
)
