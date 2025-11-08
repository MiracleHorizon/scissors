import { Flex, Grid, ScrollArea, Tabs } from '@radix-ui/themes'
import { Outlet, useLocation, useNavigate } from 'react-router'

import { SettingsPanelFooter } from './SettingsPanelFooter/SettingsPanelFooter'
import { FormProvider } from 'react-hook-form'
import { useConvertForm } from '@/features/settings/convert'

import styles from './SettingsPanel.module.css'

const tabs: {
  label: string
  value: string
}[] = [
  // {
  //   label: 'Convert',
  //   value: 'convert'
  // },
  // {
  //   label: 'Resize',
  //   value: 'resize'
  // }
] as const

// TODO: TabNav
export const SettingsPanel = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const currentTab = location.pathname.split('/').pop() || 'convert'
  const handleTabChange = (value: string) => navigate(`/${value}`)

  const convertForm = useConvertForm()

  return (
    <Flex direction='column' height='100%' className={styles.root}>
      <FormProvider {...convertForm}>
        <ScrollArea type='scroll' scrollbars='vertical' className={styles.scrollArea}>
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

        <SettingsPanelFooter />
      </FormProvider>
    </Flex>
  )
}
