import { Code, Table, Text } from '@radix-ui/themes'

import { DEFAULT_ROTATE_ANGLE } from '@libs/Sharp'

export function RotateAngleRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Rotate angle</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='span'>Rotates the image to a specified angle.</Text>
      </Table.Cell>
      <Table.Cell>
        <Code>{DEFAULT_ROTATE_ANGLE}°</Code>
      </Table.Cell>
    </Table.Row>
  )
}
