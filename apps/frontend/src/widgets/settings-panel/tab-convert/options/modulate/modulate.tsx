import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ButtonAddModulate } from './button-add-modulate'
import { ModulateContentSkeleton } from './modulate-content-skeleton'
import { useModulateStore } from '@stores/modulate'

const ModulateContent = dynamic(
  () => import('./modulate-content').then(mod => mod.ModulateContent),
  {
    ssr: false,
    loading: () => <ModulateContentSkeleton />
  }
)

export function Modulate() {
  const isAdded = useModulateStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' p='0'>
      <section>{isAdded ? <ModulateContent /> : <ButtonAddModulate />}</section>
    </Flex>
  )
}
