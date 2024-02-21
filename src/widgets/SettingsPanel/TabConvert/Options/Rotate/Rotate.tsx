import { Flex } from '@radix-ui/themes'

import { RotateContent } from './RotateContent'
import { ButtonAddRotate } from './ButtonAddRotate'
import { useRotateStore } from '@stores/rotate'

export function Rotate() {
  const isAdded = useRotateStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <RotateContent /> : <ButtonAddRotate />}</section>
    </Flex>
  )
}
