import { Flex } from '@radix-ui/themes'

import { ButtonAddResize } from './ButtonAddResize'
import { ButtonAddExtend } from './ButtonAddExtend'
import { ButtonAddTrim } from './ButtonAddTrim'
import { useTabResizeStore } from '@stores/tab-resize'

export function TabResizeActions() {
  const isAllSettled = useTabResizeStore(state => state.isAllSettled())

  if (isAllSettled) {
    return null
  }

  return (
    <Flex gap='2'>
      <ButtonAddResize />
      <ButtonAddExtend />
      <ButtonAddTrim />
    </Flex>
  )
}
