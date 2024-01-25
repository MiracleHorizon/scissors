'use client'

import dynamic from 'next/dynamic'
import { Flex, type MarginProps, ScrollArea, Tabs } from '@radix-ui/themes'

import { TabConvert } from './TabConvert'
import { ToolbarSkeleton } from '@ui/skeletons/ToolbarSkeleton'
import { useTabsStore } from '@stores/tabs'
import styles from './SettingsPanel.module.css'

const Toolbar = dynamic(() => import('./Toolbar').then(mod => mod.Toolbar), {
  ssr: false,
  loading: () => <ToolbarSkeleton />
})
const TabResize = dynamic(() => import('./TabResize').then(mod => mod.TabResize), {
  ssr: false
})

const margin: MarginProps = {
  mt: '0',
  ml: {
    initial: '0',
    md: '4'
  }
}

export function SettingsPanel() {
  const selectedTab = useTabsStore(state => state.selectedTab)
  const selectTab = useTabsStore(state => state.selectTab)

  return (
    <ScrollArea {...margin} type='scroll' scrollbars='vertical' className={styles.root}>
      <Flex direction='column' height='100%'>
        {/* eslint-disable no-unused-vars */}
        <Tabs.Root defaultValue={selectedTab} onValueChange={selectTab as (value: string) => void}>
          <Toolbar />
          <TabConvert />
          <TabResize />
        </Tabs.Root>
      </Flex>
    </ScrollArea>
  )
}
