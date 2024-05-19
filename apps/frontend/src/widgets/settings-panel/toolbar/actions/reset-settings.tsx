import { type ComponentPropsWithoutRef, type FC, useCallback } from 'react'

import { ResetIcon } from '@scissors/react-icons/ResetIcon'

import { AlertConfirmResetSettings } from '@components/alerts/alert-confirm-reset-settings'
import { ToolbarMobileMenuItem } from '../toolbar-mobile-menu'
import { ButtonReset } from '@ui/button-reset'
import { useResetSettings } from '@stores/hooks/useResetSettings'
import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'
import { useTabsStore } from '@stores/tabs'

function WithConfirmAlert({ children, onCancel, onConfirm }: WithConfirmAlertProps) {
  const selectedTab = useTabsStore(state => state.selectedTab)

  const { handleReset } = useResetSettings(selectedTab)
  const { handleRemove } = useRemoveSettings(selectedTab)

  const handleConfirm = useCallback(
    (removeAll: boolean) => {
      onConfirm?.()
      handleReset()
      if (removeAll) handleRemove()
    },
    [onConfirm, handleReset, handleRemove]
  )

  return (
    <AlertConfirmResetSettings onCancel={onCancel} onConfirm={handleConfirm}>
      {children}
    </AlertConfirmResetSettings>
  )
}

type WithConfirmAlertProps = Pick<
  ComponentPropsWithoutRef<typeof AlertConfirmResetSettings>,
  'children' | 'onCancel'
> & {
  onConfirm?: VoidFunction
}

export const ButtonSettingsReset = () => (
  <WithConfirmAlert>
    <ButtonReset tooltipContent='Reset All Settings' />
  </WithConfirmAlert>
)

export const ItemResetSettings: FC<ItemProps> = ({ onClick }) => (
  <WithConfirmAlert onConfirm={onClick}>
    <ToolbarMobileMenuItem label='Reset' icon={<ResetIcon width='20px' height='20px' />} />
  </WithConfirmAlert>
)

interface ItemProps {
  onClick?: VoidFunction
}
