'use client'

import { Grid } from '@radix-ui/themes'
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon } from '@radix-ui/react-icons'

import { OptionNumberInput } from '@widgets/SettingsPanel/OptionNumberInput'
import { useExtendStore } from '@stores/extend'
import {
  EXTEND_DIRECTION_SIZE_STEP,
  MAX_EXTEND_DIRECTION_SIZE,
  MIN_EXTEND_DIRECTION_SIZE
} from '@server/Sharp'

const defaultInputProps = {
  min: MIN_EXTEND_DIRECTION_SIZE,
  max: MAX_EXTEND_DIRECTION_SIZE,
  step: EXTEND_DIRECTION_SIZE_STEP
}

export function ExtendDirectionsForm() {
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
    <Grid asChild columns='2' align='center' gap='2' width='100%'>
      <form>
        <OptionNumberInput
          {...defaultInputProps}
          value={top}
          setValue={setTop}
          resetValue={resetTop}
          placeholder='Top'
          icon={<ArrowUpIcon />}
        />
        <OptionNumberInput
          {...defaultInputProps}
          value={bottom}
          setValue={setBottom}
          resetValue={resetBottom}
          placeholder='Bottom'
          icon={<ArrowDownIcon />}
        />

        <OptionNumberInput
          {...defaultInputProps}
          value={left}
          setValue={setLeft}
          resetValue={resetLeft}
          placeholder='Left'
          icon={<ArrowLeftIcon />}
        />
        <OptionNumberInput
          {...defaultInputProps}
          value={right}
          setValue={setRight}
          resetValue={resetRight}
          placeholder='Right'
          icon={<ArrowRightIcon />}
        />
      </form>
    </Grid>
  )
}
