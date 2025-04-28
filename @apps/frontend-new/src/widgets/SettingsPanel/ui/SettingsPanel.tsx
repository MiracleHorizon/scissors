import { Flex, ScrollArea, Tabs } from '@radix-ui/themes'
import { Outlet, useLocation, useNavigate } from 'react-router'

import { TOUR_STEP } from '@/entities/tour'
import styles from './SettingsPanel.module.css'

const tabs = [
  {
    label: 'Convert',
    value: 'convert'
  },
  {
    label: 'Resize',
    value: 'resize'
  }
] as const

export const SettingsPanel = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const currentTab = location.pathname.split('/').pop() || 'convert'
  const handleTabChange = (value: string) => navigate(`/${value}`)

  return (
    <ScrollArea
      type='scroll'
      scrollbars='vertical'
      className={styles.root}
      data-tourstep={TOUR_STEP.SETTINGS_PANEL}
    >
      <Flex direction='column' height='100%'>
        <Tabs.Root value={currentTab} onValueChange={handleTabChange}>
          <Tabs.List>
            {tabs.map(props => (
              <Tabs.Trigger key={props.value} value={props.value}>
                {props.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Outlet />
        </Tabs.Root>
      </Flex>
    </ScrollArea>
  )
}

// <Tabs.Root defaultValue={selectedTab} onValueChange={selectTab as (value: string) => void}>
//   {/* <Toolbar /> */}

//   <Flex {...contentPadding} direction='column'>
//     {selectedTab === TOOLBAR_TAB.CONVERT && <TabConvert />}
//     {selectedTab === TOOLBAR_TAB.RESIZE && <TabResize />}
//     {/* {selectedTab === TOOLBAR_TAB.METADATA && <TabMetadata />} */}
//   </Flex>
// </Tabs.Root>
