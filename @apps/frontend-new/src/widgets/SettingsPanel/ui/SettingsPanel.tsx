import { Button, Flex, Grid, ScrollArea, Tabs } from '@radix-ui/themes'
import { Outlet, useLocation, useNavigate } from 'react-router'

import { DownloadIcon } from '@scissors/react-icons/DownloadIcon'

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

// TODO: TabNav
export const SettingsPanel = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const currentTab = location.pathname.split('/').pop() || 'convert'
  const handleTabChange = (value: string) => navigate(`/${value}`)

  return (
    <Flex direction='column' height='100%' className={styles.root}>
      <ScrollArea
        type='scroll'
        scrollbars='vertical'
        className={styles.scrollArea}
        data-tourstep={TOUR_STEP.SETTINGS_PANEL}
      >
        <Flex direction='column' height='100%'>
          <Tabs.Root value={currentTab} onValueChange={handleTabChange}>
            <div className={styles.tabs}>
              <Tabs.List>
                {tabs.map(props => (
                  <Tabs.Trigger key={props.value} value={props.value}>
                    {props.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </div>

            <Grid p='3'>
              <Outlet />
            </Grid>
          </Tabs.Root>
        </Flex>
      </ScrollArea>

      <Flex mt='auto' asChild align='center' justify='end' p='3' className={styles.footer}>
        <footer>
          <Button variant='solid' radius='large'>
            <DownloadIcon width='18px' height='18px' />
            Download
          </Button>
        </footer>
      </Flex>
    </Flex>
  )
}
