import { useState } from 'react'
import { Drawer } from 'vaul'

import styles from './SettingsPanel.module.css'

export const SettingsPanel = () => {
  return <div></div>
}

const SettingsPanelDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!isOpen && (
        <Drawer.Trigger className={styles.trigger}>
          <div className={styles.triggerIndicator}></div>
        </Drawer.Trigger>
      )}

      <Drawer.Root
        open={isOpen}
        onOpenChange={setIsOpen}
        direction='right'
        shouldScaleBackground={false}
        modal={false}
      >
        <Drawer.Portal>
          <Drawer.Content className={styles.content}>
            <div className={styles.contentInner}>
              <div className={styles.header}></div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  )
}
