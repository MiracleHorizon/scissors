'use client'

import dynamic from 'next/dynamic'
import { Flex, type MarginProps } from '@radix-ui/themes'

import { ToolbarSkeleton } from '@ui/skeletons/ToolbarSkeleton'
import { OptionsSkeleton } from '@ui/skeletons/OptionsSkeleton'
import styles from './SettingsPanel.module.css'

const margin: MarginProps = {
  mt: '0',
  ml: {
    initial: '0',
    md: '4'
  }
}

const Toolbar = dynamic(() => import('./Toolbar').then(mod => mod.Toolbar), {
  ssr: false,
  loading: () => <ToolbarSkeleton />
})
const Options = dynamic(() => import('./options').then(mod => mod.Options), {
  ssr: false,
  loading: () => <OptionsSkeleton />
})

export function SettingsPanel() {
  return (
    <Flex direction='column' height='100%' pb='4' {...margin} className={styles.root}>
      <Toolbar />
      <Options />
    </Flex>
  )
}
