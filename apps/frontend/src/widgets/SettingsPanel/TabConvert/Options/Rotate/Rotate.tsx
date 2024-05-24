import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ButtonAddRotate } from './ButtonAddRotate'
import { RotateContentSkeleton } from './RotateContent/RotateContentSkeleton'
import { useRotateStore } from '@stores/rotate'

const RotateContent = dynamic(() => import('./RotateContent').then(mod => mod.RotateContent), {
  ssr: false,
  loading: () => <RotateContentSkeleton />
})

export function Rotate() {
  const isAdded = useRotateStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <RotateContent /> : <ButtonAddRotate />}</section>
    </Flex>
  )
}
