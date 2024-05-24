import { ContextMenu, Separator } from '@radix-ui/themes'
import type { ReactNode } from 'react'

import { ToolbarRandomizeMenuCheckbox } from './ToolbarRandomizeMenuCheckbox'
import { useRandomizeStore } from './store'
import { MAX_OPERATIONS } from './constants'
import styles from './ToolbarRandomizeMenu.module.css'

interface Props {
  children: ReactNode
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
