import { Code, Table, Text } from '@radix-ui/themes'

export function NegateRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Negate</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>Produce the negative of the image.</Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>Disabled</Code>
      </Table.Cell>
    </Table.Row>
  )
}
