import { Tabs } from '@radix-ui/themes'

import { ToolbarTab } from '@stores/tabs'
import styles from './ToolbarTabList.module.css'

const tabs = [
  {
    label: 'Default',
    value: ToolbarTab.DEFAULT
  },
  {
    label: 'Resize',
    value: ToolbarTab.RESIZE
  }
]

export function ToolbarTabList() {
  return (
    <Tabs.List className={styles.root}>
      {tabs.map(({ label, value }) => (
        <Tabs.Trigger key={value} value={value}>
          {label}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  )
}
