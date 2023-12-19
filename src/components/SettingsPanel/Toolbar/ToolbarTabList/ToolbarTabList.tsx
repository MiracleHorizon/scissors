import { Tabs } from '@radix-ui/themes'

import styles from './ToolbarTabList.module.css'

const tabs = [
  {
    label: 'Default',
    value: 'default'
  },
  {
    label: 'Resize',
    value: 'resize'
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
