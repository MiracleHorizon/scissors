import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { SelectResizeFit } from './SelectResizeFit'
import { ButtonInfoSkeleton } from '@ui/skeletons/ButtonInfoSkeleton'

const ResizeFitExamplesPopover = dynamic(
  () => import('./ResizeFitExamplesPopover').then(mod => mod.ResizeFitExamplesPopover),
  {
    ssr: false,
    loading: () => <ButtonInfoSkeleton />
  }
)

export function ResizeFit() {
  return (
    <Flex align='center' gap='1' width='100%'>
      <SelectResizeFit />
      <ResizeFitExamplesPopover />
    </Flex>
  )
}
