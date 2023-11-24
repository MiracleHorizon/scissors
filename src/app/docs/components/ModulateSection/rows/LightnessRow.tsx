import { Code, Table, Text } from '@radix-ui/themes'

import { MIN_LIGHTNESS } from '@libs/Sharp'

export function LightnessRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Lightness</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          The lightness of the image. The value ranges from{' '}
          <Code variant='ghost'>{MIN_LIGHTNESS}</Code> to <Code variant='ghost'>100</Code>.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>{MIN_LIGHTNESS}%</Code>
      </Table.Cell>
    </Table.Row>
  )
}
