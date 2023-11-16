import { Table } from '@radix-ui/themes'

export function DocsTableHeader() {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Option</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell width='140px'>Default</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  )
}
