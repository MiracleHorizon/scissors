import dynamic from 'next/dynamic'
import { Flex, Separator } from '@radix-ui/themes'

import {
  ButtonDownloadImageSkeleton,
  ButtonRequestSkeleton
} from '../ProcessingFooterContentSkeleton'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'

const ButtonDownloadImage = dynamic(
  () => import('./buttons/ButtonDownloadImage').then(mod => mod.ButtonDownloadImage),
  {
    ssr: false,
    loading: () => <ButtonDownloadImageSkeleton />
  }
)
const ButtonConvert = dynamic(
  () => import('./buttons/ButtonConvert').then(mod => mod.ButtonConvert),
  {
    ssr: false,
    loading: () => <ButtonRequestSkeleton />
  }
)
const ButtonResize = dynamic(() => import('./buttons/ButtonResize').then(mod => mod.ButtonResize), {
  ssr: false,
  loading: () => <ButtonRequestSkeleton />
})
const ButtonUpdateMetadata = dynamic(
  () => import('./buttons/ButtonUpdateMetadata').then(mod => mod.ButtonUpdateMetadata),
  {
    ssr: false,
    loading: () => <ButtonRequestSkeleton />
  }
)

const ProcessingFooterContent = () => {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <Flex align='center' justify='end' gap='3' height='100%' width='100%'>
      <ButtonDownloadImage />

      <Separator orientation='vertical' size='2' />

      {selectedTab === TOOLBAR_TAB.CONVERT && <ButtonConvert />}
      {selectedTab === TOOLBAR_TAB.RESIZE && <ButtonResize />}
      {selectedTab === TOOLBAR_TAB.METADATA && <ButtonUpdateMetadata />}
    </Flex>
  )
}

/*
 * Default export is required to import a client component inside a server component using next/dynamic.
 */
export default ProcessingFooterContent
