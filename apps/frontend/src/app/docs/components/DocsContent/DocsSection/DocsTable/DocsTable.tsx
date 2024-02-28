import { Table } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import { DocsTableHeader } from './DocsTableHeader'
import styles from './DocsTable.module.css'

export function DocsTable({ children }: PropsWithChildren) {
  return (
    <Table.Root
      size={{
        initial: '2',
        xs: '3'
      }}
      variant='surface'
      className={styles.root}
    >
      <DocsTableHeader />
      <Table.Body>{children}</Table.Body>
    </Table.Root>
  )
}
