import { Flex } from '@radix-ui/themes'

import { DrawModeControl } from './DrawModeControl'
import { PenConfig, LineWidth } from './PenConfig'
import { EraseRadius } from './EraseConfig'
import { DRAW_MODE, useDrawStore } from '@stores/draw'

export const DrawToolbox = () => {
  const mode = useDrawStore(state => state.mode)

  return (
    <Flex direction='column' align='start' gapY='4'>
      <DrawModeControl />

      {mode === DRAW_MODE.PEN && (
        <>
          <LineWidth />
        </>
      )}
      {mode === DRAW_MODE.ERASE && (
        <>
          <EraseRadius />
        </>
      )}

      <PenConfig />
    </Flex>
  )
}
