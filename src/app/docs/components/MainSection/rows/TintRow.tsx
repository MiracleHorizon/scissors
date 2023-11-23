import { Code, Table, Text } from '@radix-ui/themes'

import { themeColor } from '@shared/theme'

export function TintRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Tint</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          Tint the image using the provided chroma while preserving the image luminance.
          <br />
          An alpha channel may be present and will be unchanged by the operation.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3' color={themeColor}>
          Not set
        </Code>
      </Table.Cell>
    </Table.Row>
  )
}
