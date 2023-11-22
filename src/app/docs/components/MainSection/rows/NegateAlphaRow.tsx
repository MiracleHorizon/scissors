import { Code, Table, Text } from '@radix-ui/themes'

import { themeColor } from '@shared/theme'

export function NegateAlphaRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Negate alpha</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>Alpha - whether to negate any alpha channel.</Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3' color={themeColor}>
          Disabled
        </Code>
      </Table.Cell>
    </Table.Row>
  )
}
