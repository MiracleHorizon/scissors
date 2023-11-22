import { Code, Table, Text } from '@radix-ui/themes'

import { MAX_RESIZE_HEIGHT, MIN_RESIZE_SIZE } from '@libs/Sharp'
import { themeColor } from '@shared/theme'

export function HeightRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Height</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>How many pixels high the resultant image should be.</Text>
        <Text as='p'>
          The value ranges from{' '}
          <Code variant='ghost' color={themeColor}>
            {MIN_RESIZE_SIZE}
          </Code>{' '}
          to{' '}
          <Code variant='ghost' color={themeColor}>
            {MAX_RESIZE_HEIGHT}
          </Code>{' '}
          pixels.
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
