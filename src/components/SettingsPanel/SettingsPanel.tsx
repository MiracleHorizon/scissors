'use client'

import dynamic from 'next/dynamic'
import { Flex, type MarginProps, Tabs } from '@radix-ui/themes'

import { ToolbarSkeleton } from '@ui/skeletons/ToolbarSkeleton'
import { OptionsSkeleton } from '@ui/skeletons/OptionsSkeleton'
import { ConvertTab } from './tabs/ConvertTab'
import styles from './SettingsPanel.module.css'

const margin: MarginProps = {
  mt: '0',
  ml: {
    initial: '0',
    md: '4'
  }
}

const Toolbar = dynamic(() => import('./Toolbar').then(mod => mod.Toolbar), {
  ssr: false,
  loading: () => <ToolbarSkeleton />
})
const Options = dynamic(() => import('./options').then(mod => mod.Options), {
  ssr: false,
  loading: () => <OptionsSkeleton />
})

export function SettingsPanel() {
  return (
    <Flex {...margin} direction='column' height='100%' pb='4' className={styles.root}>
      <Tabs.Root defaultValue='default'>
        <Tabs.List>
          <Tabs.Trigger value='default'>Default</Tabs.Trigger>
          <Tabs.Trigger value='convert'>Format</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value='default'>
          <Toolbar />
          <Options />
        </Tabs.Content>

        <ConvertTab />
      </Tabs.Root>
    </Flex>
  )
}
