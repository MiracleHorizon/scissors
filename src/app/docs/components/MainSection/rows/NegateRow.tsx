import { Code, Table, Text } from '@radix-ui/themes'

import { themeColor } from '@shared/theme'

export function NegateRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Negate</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>Produce the negative of the image.</Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3' color={themeColor}>
          Disabled
        </Code>
      </Table.Cell>
    </Table.Row>
  )
}
