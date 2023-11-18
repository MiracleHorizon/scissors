import { Code, Strong, Table, Text } from '@radix-ui/themes'

import { DEFAULT_ROTATE_ANGLE, DEFAULT_ROTATE_BACKGROUND } from '@libs/Sharp'
import { themeColor } from '@shared/theme'

export function RotateRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Rotate</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          <Text as='span'>
            Rotates the image to a specified <Code color={themeColor}>angle</Code>.
          </Text>
          <br />
          <Text as='span'>
            If you rotate by an angle other than a multiple of{' '}
            <Code variant='ghost' weight='bold' color={themeColor}>
              90°
            </Code>
            , the background color set with the <Code color={themeColor}>background</Code>
            option will be visible.
          </Text>
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Text as='p'>
          <Text as='span'>
            Angle: <Strong>{DEFAULT_ROTATE_ANGLE}°</Strong>
          </Text>
          <br />
          <Text as='span'>
            Background:{' '}
            <Code variant='solid' color={themeColor}>
              {DEFAULT_ROTATE_BACKGROUND}
            </Code>
          </Text>
        </Text>
      </Table.Cell>
    </Table.Row>
  )
}
