import { Separator, Tabs } from '@radix-ui/themes'

import { Resize } from './Resize'
import { Extend } from './Extend'
import styles from './TabResize.module.css'

const TabSeparator = () => <Separator mt='3' ml='3' className={styles.separator} />

export function TabResize() {
  return (
    <Tabs.Content value='resize'>
      <Resize />
      <TabSeparator />
      <Extend />
    </Tabs.Content>
  )
}
