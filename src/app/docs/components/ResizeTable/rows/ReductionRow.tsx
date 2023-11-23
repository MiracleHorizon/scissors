import { Code, Table, Text } from '@radix-ui/themes'

import { DEFAULT_WITHOUT_REDUCTION } from '@libs/Sharp'

export function ReductionRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Reduction</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          Do not scale down if the width or height are already greater than the target dimensions.
          <br />
          This may still result in a crop to reach the target dimensions.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>{DEFAULT_WITHOUT_REDUCTION ? 'Enabled' : 'Disabled'}</Code>
      </Table.Cell>
    </Table.Row>
  )
}
