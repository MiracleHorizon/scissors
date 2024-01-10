import { Flex } from '@radix-ui/themes'

import { ButtonAddResize } from './ButtonAddResize'
import { ButtonAddExtend } from './ButtonAddExtend'

export function TabResizeEmpty() {
  return (
    <Flex justify='center' align='center' gap='2' width='100%'>
      <ButtonAddResize />
      <ButtonAddExtend />
    </Flex>
  )
}
