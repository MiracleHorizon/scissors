'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Flex, type MarginProps, ScrollArea, Tabs } from '@radix-ui/themes'

import { TabDefault } from './TabDefault'
import { ToolbarSkeleton } from '@ui/skeletons/ToolbarSkeleton'
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
  const [tab, setTab] = useState('default')

  return (
    <ScrollArea {...margin} type='scroll' scrollbars='vertical' className={styles.root}>
      <Flex direction='column' height='100%'>
        <Tabs.Root defaultValue='default' onValueChange={setTab}>
          <Toolbar activeTab={tab} />
          <TabDefault />
          <TabResize />
        </Tabs.Root>
      </Flex>
    </ScrollArea>
  )
}
