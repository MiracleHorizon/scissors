import { Flex, ScrollArea, Tabs } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'

// import { ToolbarSkeleton } from './Toolbar/ToolbarSkeleton'
// import { TabConvertSkeleton } from './TabConvert/TabConvertSkeleton'
// import { TabResizeSkeleton } from './TabResize/TabResizeSkeleton'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import { TOUR_STEP } from '@lib/tour'
import styles from './SettingsPanel.module.css'
import { Toolbar } from './Toolbar'
import { TabConvert } from './TabConvert'
import { TabResize } from './TabResize'

// const Toolbar = dynamic(() => import('./Toolbar').then(mod => mod.Toolbar), {
//   ssr: false,
//   loading: () => <ToolbarSkeleton />
// })
// const TabConvert = dynamic(() => import('./TabConvert').then(mod => mod.TabConvert), {
//   ssr: false,
//   loading: () => <TabConvertSkeleton />
// })
// const TabResize = dynamic(() => import('./TabResize').then(mod => mod.TabResize), {
//   ssr: false,
//   loading: () => <TabResizeSkeleton />
// })
// const TabMetadata = dynamic(() => import('./TabMetadata').then(mod => mod.TabMetadata), {
//   ssr: false
// })

export const contentPadding: PaddingProps = {
  pl: {
    initial: '3',
    md: '2'
  },
  pr: '14px',
  py: '3'
} as const

export const SettingsPanel = () => {
  const selectedTab = useTabsStore(state => state.selectedTab)
  const selectTab = useTabsStore(state => state.selectTab)

  return (
    <ScrollArea
      type='scroll'
      scrollbars='vertical'
      className={styles.root}
      data-tourstep={TOUR_STEP.SETTINGS_PANEL}
    >
      <Flex direction='column' height='100%'>
        {/* eslint-disable no-unused-vars */}
        <Tabs.Root defaultValue={selectedTab} onValueChange={selectTab as (value: string) => void}>
          <Toolbar />

          <Flex {...contentPadding} direction='column'>
            {selectedTab === TOOLBAR_TAB.CONVERT && <TabConvert />}
            {selectedTab === TOOLBAR_TAB.RESIZE && <TabResize />}
            {/* {selectedTab === TOOLBAR_TAB.METADATA && <TabMetadata />} */}
          </Flex>
        </Tabs.Root>
      </Flex>
    </ScrollArea>
  )
}
