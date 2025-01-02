import { useCallback } from 'react'
import { ContextMenu } from '@radix-ui/themes'

import { ShuffleIcon } from '@scissors/react-icons/ShuffleIcon'

import { ButtonRandomize } from '@ui/ButtonRandomize'
import { ToolbarMobileMenuItem } from '../ToolbarMobileMenu'
import { ToolbarRandomizeMenu } from '../ToolbarRandomizeMenu'
import { useRandomizeSettings } from '@stores/hooks/useRandomizeSettings'
import { useRandomizeStore } from '../ToolbarRandomizeMenu/store'

const useRandomize = () => {
  const checkedSettings = useRandomizeStore(state => state.getCheckedSettings())
  const { handleRandomize } = useRandomizeSettings()

  const handleRandomizeSettings = useCallback(() => {
    const operations = checkedSettings.map(s => s.label)
    handleRandomize(operations)
  }, [checkedSettings, handleRandomize])

  return { handleRandomize: handleRandomizeSettings }
}

export const ButtonRandomizeSettings = () => {
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

interface ItemProps {
  onClick?: VoidFunction
}

export const ItemRandomizeSettings = ({ onClick }: ItemProps) => {
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
