import { Table } from '@radix-ui/themes'

const defaultValueCellStyle = {
  width: '15%',
  minWidth: '140px'
}

export function DocsTableHeader() {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Option</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell style={defaultValueCellStyle}>Default</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  )
}
