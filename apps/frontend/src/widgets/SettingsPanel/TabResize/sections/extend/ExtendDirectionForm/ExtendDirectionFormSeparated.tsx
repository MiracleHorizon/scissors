import { ArrowUpIcon } from '@ui/icons/ArrowUpIcon'
import { ArrowDownIcon } from '@ui/icons/ArrowDownIcon'
import { ArrowLeftIcon } from '@ui/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@ui/icons/ArrowRightIcon'
import { OptionNumberInput } from '@components/OptionNumberInput'
import { DEFAULT_EXTEND_INPUT_PROPS } from './constants'
import { useExtendStore } from '@stores/extend'

export function ExtendDirectionFormSeparated() {
  const top = useExtendStore(state => state.top)
  const bottom = useExtendStore(state => state.bottom)
  const left = useExtendStore(state => state.left)
  const right = useExtendStore(state => state.right)

  const setTop = useExtendStore(state => state.setTop)
  const setBottom = useExtendStore(state => state.setBottom)
  const setLeft = useExtendStore(state => state.setLeft)
  const setRight = useExtendStore(state => state.setRight)

  return (
    <>
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={left}
        setValue={setLeft}
        placeholder='Left'
        icon={<ArrowLeftIcon label='extend left' />}
      />
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={right}
        setValue={setRight}
        placeholder='Right'
        icon={<ArrowRightIcon label='extend right' />}
      />
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={top}
        setValue={setTop}
        placeholder='Top'
        icon={<ArrowUpIcon label='extend top' />}
      />
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={bottom}
        setValue={setBottom}
        placeholder='Bottom'
        icon={<ArrowDownIcon label='extend bottom' />}
      />
    </>
  )
}
