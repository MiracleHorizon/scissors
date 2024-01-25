import { useCallback } from 'react'
import { ContextMenu, Separator } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { ButtonRandomize } from '@ui/ButtonRandomize'
import { useSettingsSetters } from '@stores/hooks/useSettingsSetters'
import { ConvertSettingsRandomizer } from '@utils/ConvertSettingsRandomizer'
import { useRandomizeStore } from './store'
import { MAX_OPERATIONS } from './constants'
import type { Setting } from './types'
import styles from './ToolbarRandomizeMenu.module.css'

function ToolbarRandomizeMenuTrigger() {
  // TODO: Try to refactor :)
  const checkedSettings = useRandomizeStore(state => state.getCheckedSettings())
  const { setters } = useSettingsSetters()

  const handleRandomize = useCallback(() => {
    const operations = checkedSettings.map(s => s.label)
    const settingsRandomizer = new ConvertSettingsRandomizer(operations)
    const randomSettings = settingsRandomizer.randomize()

    for (const [key, value] of Object.entries(randomSettings)) {
      if (!(key in setters)) continue

      // eslint-disable-next-line
      // @ts-expect-error
      setters[key](value)
    }
  }, [setters, checkedSettings])

  return (
    <ContextMenu.Trigger>
      <ButtonRandomize color='gray' tooltipContent='Randomize Settings' onClick={handleRandomize} />
    </ContextMenu.Trigger>
  )
}

function ToolbarRandomizeMenuCheckbox({ label, checked }: Setting) {
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

export function ToolbarRandomizeMenu() {
  const settings = useRandomizeStore(state => state.settings)
  const totalChecked = useRandomizeStore(state => state.getTotalChecked())

  return (
    <ContextMenu.Root>
      <ToolbarRandomizeMenuTrigger />

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
