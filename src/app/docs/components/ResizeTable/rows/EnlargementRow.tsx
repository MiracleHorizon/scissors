import { Code, Table, Text } from '@radix-ui/themes'

import { DEFAULT_WITHOUT_ENLARGEMENT } from '@libs/Sharp'

export function EnlargementRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Enlargement</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          Do not scale up if the width or height are already less than the target dimensions.
          <br />
          This may result in output dimensions smaller than the target dimensions.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>{DEFAULT_WITHOUT_ENLARGEMENT ? 'Enabled' : 'Disabled'}</Code>
      </Table.Cell>
    </Table.Row>
  )
}
