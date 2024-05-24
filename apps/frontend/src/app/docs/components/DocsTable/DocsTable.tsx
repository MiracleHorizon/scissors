import { Table } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import { DocsTableHeader } from './DocsTableHeader'
import type { TableSize } from '@lib/theme'
import styles from './DocsTable.module.css'

const size: TableSize = {
  initial: '2',
  xs: '3'
} as const

export const DocsTable = ({ children }: PropsWithChildren) => (
  <Table.Root size={size} variant='surface' className={styles.root}>
    <DocsTableHeader />
    <Table.Body>{children}</Table.Body>
  </Table.Root>
)
