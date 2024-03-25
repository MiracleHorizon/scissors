import { Table } from '@radix-ui/themes'

export const DocsTableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Option</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell width='15%' minWidth='140px'>
        Default
      </Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
)
