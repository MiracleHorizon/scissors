import { Code, Table, Text } from '@radix-ui/themes'

export function FlopRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Flop</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>Mirror the image horizontally (left-right) about the y-axis.</Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>Disabled</Code>
      </Table.Cell>
    </Table.Row>
  )
}
