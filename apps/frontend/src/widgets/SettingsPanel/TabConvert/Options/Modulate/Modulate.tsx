import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ButtonAddModulate } from './ButtonAddModulate'
import { ModulateContentSkeleton } from './ModulateContent/ModulateContentSkeleton'
import { useModulateStore } from '@stores/modulate'

const ModulateContent = dynamic(
  () => import('./ModulateContent').then(mod => mod.ModulateContent),
  {
    ssr: false,
    loading: () => <ModulateContentSkeleton />
  }
)

export const Modulate=()=> {
  const isAdded = useModulateStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' p='0'>
      <section>{isAdded ? <ModulateContent /> : <ButtonAddModulate />}</section>
    </Flex>
  )
}
