import { Tabs } from '@radix-ui/themes'

import { TOOLBAR_TAB } from '@stores/tabs'
import styles from './ToolbarTabList.module.css'

const tabs = [
  {
    label: 'Convert',
    value: TOOLBAR_TAB.CONVERT
  },
  {
    label: 'Resize',
    value: TOOLBAR_TAB.RESIZE
  }
]

export const ToolbarTabList = () => (
  <Tabs.List className={styles.root}>
    {tabs.map(({ label, value }) => (
      <Tabs.Trigger key={value} value={value}>
        {label}
      </Tabs.Trigger>
    ))}
  </Tabs.List>
)
