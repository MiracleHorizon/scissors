import { Code, Table, Text } from '@radix-ui/themes'

import { DEFAULT_ROTATE_ANGLE } from '@libs/Sharp'
import { themeColor } from '@shared/theme'

export function RotateAngleRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Rotate angle</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='span'>Rotates the image to a specified angle.</Text>
      </Table.Cell>
      <Table.Cell>
        <Code color={themeColor}>{DEFAULT_ROTATE_ANGLE}°</Code>
      </Table.Cell>
    </Table.Row>
  )
}
