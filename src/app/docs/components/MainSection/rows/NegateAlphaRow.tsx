import { Code, Table, Text } from '@radix-ui/themes'

export function NegateAlphaRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Negate alpha</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>Alpha - whether to negate any alpha channel.</Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>Disabled</Code>
      </Table.Cell>
    </Table.Row>
  )
}
