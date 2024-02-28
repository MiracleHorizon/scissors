'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { Flex, type MarginProps, ScrollArea, Tabs } from '@radix-ui/themes'
import 'driver.js/dist/driver.css'

import { ToolbarSkeleton } from './Toolbar/ToolbarSkeleton'
import { TabConvertSkeleton } from './TabConvert/TabConvertSkeleton'
import { TabResizeSkeleton } from './TabResize/TabResizeSkeleton'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import { createTour, isTourCompleted, TOUR_STEP } from '@lib/tour'
import '@lib/tour/tour.css'
import styles from './SettingsPanel.module.css'

const Toolbar = dynamic(() => import('./Toolbar').then(mod => mod.Toolbar), {
  ssr: false,
  loading: () => <ToolbarSkeleton />
})
const TabConvert = dynamic(() => import('./TabConvert').then(mod => mod.TabConvert), {
  ssr: false,
  loading: () => <TabConvertSkeleton />
})
const TabResize = dynamic(() => import('./TabResize').then(mod => mod.TabResize), {
  ssr: false,
  loading: () => <TabResizeSkeleton />
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

  useEffect(() => {
    if (isTourCompleted()) return

    /*
     * Start user tour.
     */
    createTour().then(driver => {
      driver.drive()
    })
  }, [])

  return (
    <ScrollArea
      {...margin}
      data-tourstep={TOUR_STEP.SETTINGS_PANEL}
      type='scroll'
      scrollbars='vertical'
      className={styles.root}
    >
      <Flex direction='column' height='100%'>
        {/* eslint-disable no-unused-vars */}
        <Tabs.Root defaultValue={selectedTab} onValueChange={selectTab as (value: string) => void}>
          <Toolbar />
          {selectedTab === TOOLBAR_TAB.CONVERT && <TabConvert />}
          {selectedTab === TOOLBAR_TAB.RESIZE && <TabResize />}
        </Tabs.Root>
      </Flex>
    </ScrollArea>
  )
}