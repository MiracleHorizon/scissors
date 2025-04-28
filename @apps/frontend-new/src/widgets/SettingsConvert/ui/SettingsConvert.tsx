import { Card, Flex, Tabs } from '@radix-ui/themes'

import { Modulate } from '@/features/settings/convert'
import styles from './SettingsConvert.module.css'

export const SettingsConvert = () => {
  return (
    <Tabs.Content value='convert'>
      <Flex width='100%' direction='column' gap='2'>
        <Card className={styles.card}>
          <Modulate />
        </Card>
      </Flex>
    </Tabs.Content>
  )
}
