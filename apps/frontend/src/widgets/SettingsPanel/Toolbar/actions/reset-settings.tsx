import { type ComponentPropsWithoutRef, type FC, useCallback } from 'react'

import { ResetIcon } from '@scissors/react-icons/ResetIcon'

import { ConfirmSettingsResetAlert } from '@components/alerts/ConfirmSettingsResetAlert'
import { ToolbarMobileMenuItem } from '../ToolbarMobileMenu'
import { ButtonReset } from '@ui/ButtonReset'
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
    <ConfirmSettingsResetAlert onCancel={onCancel} onConfirm={handleConfirm}>
      {children}
    </ConfirmSettingsResetAlert>
  )
}

type WithConfirmAlertProps = Pick<
  ComponentPropsWithoutRef<typeof ConfirmSettingsResetAlert>,
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
