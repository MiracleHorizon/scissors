'use client'

import { ArrowUpIcon } from '@ui/icons/ArrowUpIcon'
import { ArrowDownIcon } from '@ui/icons/ArrowDownIcon'
import { ArrowLeftIcon } from '@ui/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@ui/icons/ArrowRightIcon'
import { DirectionFormSeparated } from '@components/DirectionForm'
import { useExtendStore } from '@stores/extend'
import { DEFAULT_EXTEND_INPUT_PROPS } from '@server/Sharp'

const icons = {
  left: <ArrowLeftIcon label='extend left' />,
  right: <ArrowRightIcon label='extend right' />,
  top: <ArrowUpIcon label='extend top' />,
  bottom: <ArrowDownIcon label='extend bottom' />
}

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
    <DirectionFormSeparated
      {...DEFAULT_EXTEND_INPUT_PROPS}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      setLeft={setLeft}
      setRight={setRight}
      setTop={setTop}
      setBottom={setBottom}
      icons={icons}
    />
  )
}
