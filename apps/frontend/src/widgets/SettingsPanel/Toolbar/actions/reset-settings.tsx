import { type ComponentPropsWithoutRef, type FC, useCallback } from 'react'

import { ConfirmSettingsResetAlert } from '@components/alerts/ConfirmSettingsResetAlert'
import { ToolbarMobileMenuItem } from '../ToolbarMobileMenu'
import { ResetIcon } from '@ui/icons/ResetIcon'
import { ButtonReset } from '@ui/ButtonReset'
import { useResetSettings } from '@stores/hooks/useResetSettings'
import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'

function WithConfirmAlert({ children, onCancel, onConfirm }: WithConfirmAlertProps) {
  const { handleReset } = useResetSettings()
  const { handleRemove } = useRemoveSettings()

  const handleConfirm = useCallback(
    (removeAll: boolean) => {
      if (onConfirm) onConfirm()
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
