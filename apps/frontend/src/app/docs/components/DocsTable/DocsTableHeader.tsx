import { Table } from '@radix-ui/themes'

import styles from './DocsTableHeader.module.css'

export const DocsTableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Option</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className={styles.defaultValueCell}>Default</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
)
