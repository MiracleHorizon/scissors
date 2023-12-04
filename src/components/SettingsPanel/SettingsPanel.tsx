'use client'

import { Flex, type MarginProps } from '@radix-ui/themes'

import { Options } from '@components/options'
import { Toolbar } from './Toolbar'
import styles from './SettingsPanel.module.css'

const margin: MarginProps = {
  mt: '0',
  ml: {
    initial: '0',
    md: '4'
  }
}

export function SettingsPanel() {
  return (
    <Flex direction='column' height='100%' pb='4' {...margin} className={styles.root}>
      <Toolbar />
      <Options />
    </Flex>
  )
}
