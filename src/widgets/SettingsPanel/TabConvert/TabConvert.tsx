import dynamic from 'next/dynamic'
import { Tabs } from '@radix-ui/themes'

import { OptionsSkeleton } from '@ui/skeletons/OptionsSkeleton'
import { TOOLBAR_TAB } from '@stores/tabs'

const Options = dynamic(() => import('./options').then(mod => mod.Options), {
  ssr: false,
  loading: () => <OptionsSkeleton />
})

export const TabConvert = () => (
  <Tabs.Content value={TOOLBAR_TAB.CONVERT}>
    <Options />
  </Tabs.Content>
)
