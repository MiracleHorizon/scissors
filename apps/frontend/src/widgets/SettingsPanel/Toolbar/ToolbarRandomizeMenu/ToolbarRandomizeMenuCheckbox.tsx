import { ContextMenu } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { useRandomizeStore } from './store'
import type { Setting } from './types'

export const ToolbarRandomizeMenuCheckbox = ({ label, checked }: Setting) => {
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
