'use client'

import dynamic from 'next/dynamic'
import { Flex, Separator } from '@radix-ui/themes'

import { ButtonDownloadSkeleton, ButtonRequestSkeleton } from '../AppFooterContentSkeleton'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'

const ButtonDownload = dynamic(
  () => import('./buttons/ButtonDownload').then(mod => mod.ButtonDownload),
  {
    ssr: false,
    loading: () => <ButtonDownloadSkeleton />
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
const ButtonMetadata = dynamic(
  () => import('./buttons/ButtonMetadata').then(mod => mod.ButtonMetadata),
  {
    ssr: false,
    loading: () => <ButtonRequestSkeleton />
  }
)

const AppFooterContent = () => {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <Flex align='center' justify='end' gap='3' height='100%' width='100%'>
      <ButtonDownload />

      <Separator orientation='vertical' size='2' />

      {selectedTab === TOOLBAR_TAB.CONVERT && <ButtonConvert />}
      {selectedTab === TOOLBAR_TAB.RESIZE && <ButtonResize />}
      {selectedTab === TOOLBAR_TAB.METADATA && <ButtonMetadata />}
    </Flex>
  )
}

/*
 * Default export is required to import a client component inside a server component using next/dynamic.
 */
export default AppFooterContent
