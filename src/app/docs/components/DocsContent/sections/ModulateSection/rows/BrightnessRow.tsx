import { Code, Table, Text } from '@radix-ui/themes'

import { MAX_BRIGHTNESS, MIN_BRIGHTNESS } from '@libs/Sharp'

export function BrightnessRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Brightness</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          The brightness of the image. The value ranges from{' '}
          <Code variant='ghost'>{MIN_BRIGHTNESS}</Code> to{' '}
          <Code variant='ghost'>{MAX_BRIGHTNESS}</Code>.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>{MIN_BRIGHTNESS}</Code>
      </Table.Cell>
    </Table.Row>
  )
}
