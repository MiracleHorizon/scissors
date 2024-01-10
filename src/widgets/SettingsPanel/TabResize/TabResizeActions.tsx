import { Flex } from '@radix-ui/themes'

import { ButtonAddResize } from './ButtonAddResize'
import { ButtonAddExtend } from './ButtonAddExtend'
import { useTabResizeStore } from '@stores/tab-resize'

export function TabResizeActions() {
  const isResizeAdded = useTabResizeStore(state => state.isResizeAdded())
  const isExtendAdded = useTabResizeStore(state => state.isExtendAdded())

  if (isResizeAdded && isExtendAdded) {
    return null
  }

  return (
    <Flex gap='2'>
      <ButtonAddResize />
      <ButtonAddExtend />
    </Flex>
  )
}
