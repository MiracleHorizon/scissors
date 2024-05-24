import { ContextMenu, Separator } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'
import type { ReactNode } from 'react'

import { useRandomizeStore } from './store'
import { MAX_OPERATIONS } from './constants'
import type { Setting } from './types'
import styles from './ToolbarRandomizeMenu.module.css'

const ToolbarRandomizeMenuCheckbox = ({ label, checked }: Setting) => {
  const isMaxOperations = useRandomizeStore(state => state.isMaxOperations())

  const toggleChecked = useRandomizeStore(state => state.toggleSettingChecked)
  const handleToggle = (ev: Event) => {
    /*
     * Prevent the ContextMenu from closing after clicking on the checkbox.
     */
    ev.preventDefault()

    toggleChecked(label)
  }

  return (
    <ContextMenu.CheckboxItem
      checked={checked}
      disabled={isMaxOperations && !checked}
      onSelect={handleToggle}
    >
      {capitalize(label)}
    </ContextMenu.CheckboxItem>
  )
}

export const ToolbarRandomizeMenu = ({ children }: Props) => {
  const settings = useRandomizeStore(state => state.settings)
  const totalChecked = useRandomizeStore(state => state.getTotalChecked())

  return (
    <ContextMenu.Root>
      {children}

      <ContextMenu.Content className={styles.content}>
        <ContextMenu.Label className={styles.label}>
          Operations: {totalChecked} / {MAX_OPERATIONS}
        </ContextMenu.Label>

        <Separator size='4' orientation='horizontal' mt='1' mb='2' />

        {settings.map(setting => (
          <ToolbarRandomizeMenuCheckbox key={setting.label} {...setting} />
        ))}
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
}

interface Props {
  children: ReactNode
}
