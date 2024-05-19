import { useCallback } from 'react'
import { ContextMenu } from '@radix-ui/themes'

import { ShuffleIcon } from '@scissors/react-icons/ShuffleIcon'

import { ButtonRandomize } from '@ui/button-randomize'
import { ToolbarMobileMenuItem } from '../toolbar-mobile-menu'
import { ToolbarRandomizeMenu } from '../toolbar-randomize-menu'
import { useRandomizeSettings } from '@stores/hooks/useRandomizeSettings'
import { useRandomizeStore } from '../toolbar-randomize-menu/store'

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
    <ToolbarRandomizeMenu>
      <ContextMenu.Trigger>
        <ButtonRandomize
          color='gray'
          tooltipContent='Randomize Settings'
          onClick={handleRandomize}
        />
      </ContextMenu.Trigger>
    </ToolbarRandomizeMenu>
  )
}

export function ItemRandomizeSettings({ onClick }: ItemProps) {
  const { handleRandomize } = useRandomize()

  const handleClick = () => {
    handleRandomize()
    onClick?.()
  }

  return (
    <ToolbarRandomizeMenu>
      <ContextMenu.Trigger>
        <ToolbarMobileMenuItem
          label='Randomize'
          icon={<ShuffleIcon width='20px' height='20px' label='randomize settings' />}
          onClick={handleClick}
        />
      </ContextMenu.Trigger>
    </ToolbarRandomizeMenu>
  )
}

interface ItemProps {
  onClick?: VoidFunction
}
