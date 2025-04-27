import { lazy, Suspense } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

import {
  ButtonDownloadImageSkeleton,
  ButtonRequestSkeleton
} from '../ProcessingFooterContentSkeleton'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'

const ButtonDownloadImage = lazy(() =>
  import('./buttons/ButtonDownloadImage').then(mod => ({ default: mod.ButtonDownloadImage }))
)
const ButtonConvert = lazy(() =>
  import('./buttons/ButtonConvert').then(mod => ({ default: mod.ButtonConvert }))
)
const ButtonResize = lazy(() =>
  import('./buttons/ButtonResize').then(mod => ({ default: mod.ButtonResize }))
)
const ButtonUpdateMetadata = lazy(() =>
  import('./buttons/ButtonUpdateMetadata').then(mod => ({ default: mod.ButtonUpdateMetadata }))
)

const ProcessingFooterContent = () => {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <Flex align='center' justify='end' gap='3' height='100%' width='100%'>
      <Suspense fallback={<ButtonDownloadImageSkeleton />}>
        <ButtonDownloadImage />
      </Suspense>

      <Separator orientation='vertical' size='2' />

      {selectedTab === TOOLBAR_TAB.CONVERT && (
        <Suspense fallback={<ButtonRequestSkeleton />}>
          <ButtonConvert />
        </Suspense>
      )}
      {selectedTab === TOOLBAR_TAB.RESIZE && (
        <Suspense fallback={<ButtonRequestSkeleton />}>
          <ButtonResize />
        </Suspense>
      )}
      {selectedTab === TOOLBAR_TAB.METADATA && (
        <Suspense fallback={<ButtonRequestSkeleton />}>
          <ButtonUpdateMetadata />
        </Suspense>
      )}
    </Flex>
  )
}

/*
 * Default export is required to import a client component inside a server component using next/dynamic.
 */
export default ProcessingFooterContent
