import { Code, Table, Text } from '@radix-ui/themes'

import { DEFAULT_ROTATE_BACKGROUND } from '@libs/Sharp'
import { themeColor } from '@shared/theme'

export function RotateBackgroundRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Rotate background</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          If you rotate by an angle other than a multiple of{' '}
          <Code variant='ghost' color={themeColor}>
            90°
          </Code>
          , the background color set with the background option will be visible.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code color={themeColor}>{DEFAULT_ROTATE_BACKGROUND}</Code>
      </Table.Cell>
    </Table.Row>
  )
}
