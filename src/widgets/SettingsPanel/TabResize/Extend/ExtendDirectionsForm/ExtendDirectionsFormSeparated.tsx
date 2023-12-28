'use client'

import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon } from '@radix-ui/react-icons'

import { OptionNumberInput } from '@widgets/SettingsPanel/OptionNumberInput'
import { useExtendStore } from '@stores/extend'
import { DEFAULT_EXTEND_INPUT_PROPS } from '@server/Sharp'

export function ExtendDirectionsFormSeparated() {
  const top = useExtendStore(state => state.top)
  const bottom = useExtendStore(state => state.bottom)
  const left = useExtendStore(state => state.left)
  const right = useExtendStore(state => state.right)

  const setTop = useExtendStore(state => state.setTop)
  const setBottom = useExtendStore(state => state.setBottom)
  const setLeft = useExtendStore(state => state.setLeft)
  const setRight = useExtendStore(state => state.setRight)

  const resetTop = useExtendStore(state => state.resetTop)
  const resetBottom = useExtendStore(state => state.resetBottom)
  const resetLeft = useExtendStore(state => state.resetLeft)
  const resetRight = useExtendStore(state => state.resetRight)

  return (
    <>
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={left}
        setValue={setLeft}
        resetValue={resetLeft}
        placeholder='Left'
        icon={<ArrowLeftIcon />}
      />

      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={right}
        setValue={setRight}
        resetValue={resetRight}
        placeholder='Right'
        icon={<ArrowRightIcon />}
      />

      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={top}
        setValue={setTop}
        resetValue={resetTop}
        placeholder='Top'
        icon={<ArrowUpIcon />}
      />
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={bottom}
        setValue={setBottom}
        resetValue={resetBottom}
        placeholder='Bottom'
        icon={<ArrowDownIcon />}
      />
    </>
  )
}
