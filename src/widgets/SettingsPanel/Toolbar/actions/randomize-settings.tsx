import { useCallback } from 'react'
import { ContextMenu, DropdownMenu } from '@radix-ui/themes'

import { ShuffleIcon } from '@ui/icons/ShuffleIcon'
import { ButtonRandomize } from '@ui/ButtonRandomize'
import { useRandomizeSettings } from '@stores/hooks/useRandomizeSettings'
import { useRandomizeStore } from '../ToolbarRandomizeMenu/store'

function useRandomize() {
  const checkedSettings = useRandomizeStore(state => state.getCheckedSettings())
  const { handleRandomize } = useRandomizeSettings()

  const handleRandomizeSettings = useCallback(() => {
    const operations = checkedSettings.map(s => s.label)
    handleRandomize(operations)
  }, [checkedSettings, handleRandomize])

  return { handleRandomize: handleRandomizeSettings }
}

export function ButtonRandomizeSettings() {
  const { handleRandomize } = useRandomize()

  return (
    <ContextMenu.Trigger>
      <ButtonRandomize color='gray' tooltipContent='Randomize Settings' onClick={handleRandomize} />
    </ContextMenu.Trigger>
  )
}

export function DropdownItemRandomizeSettings({ onClose }: DropdownItemProps) {
  const { handleRandomize } = useRandomize()

  const handleClick = () => {
    handleRandomize()
    onClose()
  }

  return (
    <ContextMenu.Trigger>
      <DropdownMenu.Item onSelect={handleClick}>
        Randomize <ShuffleIcon width='16px' height='16px' />
      </DropdownMenu.Item>
    </ContextMenu.Trigger>
  )
}

interface DropdownItemProps {
  onClose: VoidFunction
}
