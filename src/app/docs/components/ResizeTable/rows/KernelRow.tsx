import { Code, Table, Text } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { DEFAULT_RESIZE_KERNEL } from '@libs/Sharp'
import { themeColor } from '@shared/theme'

export function KernelRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Kernel</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>The kernel to use for image reduction.</Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3' color={themeColor}>
          {capitalize(DEFAULT_RESIZE_KERNEL)}
        </Code>
      </Table.Cell>
    </Table.Row>
  )
}
