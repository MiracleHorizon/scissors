import dynamic from 'next/dynamic'

import { Tabs } from '@radix-ui/themes'
import { OptionsSkeleton } from '@ui/skeletons/OptionsSkeleton'

const Options = dynamic(() => import('./options').then(mod => mod.Options), {
  ssr: false,
  loading: () => <OptionsSkeleton />
})

export function TabDefault() {
  return (
    <Tabs.Content value='default'>
      <Options />
    </Tabs.Content>
  )
}
