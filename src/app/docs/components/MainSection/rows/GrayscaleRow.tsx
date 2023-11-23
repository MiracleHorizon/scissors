import { Code, Table, Text } from '@radix-ui/themes'

export function GrayscaleRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Grayscale</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          Convert to 8-bit grayscale; 256 shades of gray.
          <br />
          An alpha channel may be present, and will be unchanged by the operation.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>Disabled</Code>
      </Table.Cell>
    </Table.Row>
  )
}
