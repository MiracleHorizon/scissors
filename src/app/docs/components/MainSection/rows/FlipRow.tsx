import { Code, Table, Text } from '@radix-ui/themes'

export function FlipRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Flip</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          <Text as='span'>Mirror the image vertically (up-down) about the x-axis.</Text>
          <br />
          <Text as='span'>This operation does not work correctly with multipage images.</Text>
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>Disabled</Code>
      </Table.Cell>
    </Table.Row>
  )
}
