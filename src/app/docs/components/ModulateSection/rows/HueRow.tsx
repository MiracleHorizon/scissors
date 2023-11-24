import { Code, Table, Text } from '@radix-ui/themes'

import { MAX_HUE, MIN_HUE } from '@libs/Sharp'

export function HueRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Hue angle</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          The angle for the hue rotation of the image. The value ranges from{' '}
          <Code variant='ghost'>{MIN_HUE}</Code> to <Code variant='ghost'>{MAX_HUE}</Code>.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>{MIN_HUE}°</Code>
      </Table.Cell>
    </Table.Row>
  )
}
