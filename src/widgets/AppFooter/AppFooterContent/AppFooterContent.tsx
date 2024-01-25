'use client'

import dynamic from 'next/dynamic'
import { Flex, Separator } from '@radix-ui/themes'

import { ButtonDownload } from './ButtonDownload'
import { ButtonRequestSkeleton } from '../AppFooterContentSkeleton'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import styles from './AppFooterContent.module.css'

const ButtonConvert = dynamic(() => import('./ButtonConvert').then(mod => mod.ButtonConvert), {
  ssr: false,
  loading: () => <ButtonRequestSkeleton />
})
const ButtonResize = dynamic(() => import('./ButtonResize').then(mod => mod.ButtonResize), {
  ssr: false,
  loading: () => <ButtonRequestSkeleton />
})

export default function AppFooterContent() {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <Flex align='center' justify='end' gap='3' height='100%' width='100%' className={styles.root}>
      <ButtonDownload />
      <Separator orientation='vertical' size='2' />
      {selectedTab === TOOLBAR_TAB.CONVERT && <ButtonConvert />}
      {selectedTab === TOOLBAR_TAB.RESIZE && <ButtonResize />}
    </Flex>
  )
}
