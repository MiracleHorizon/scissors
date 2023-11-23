import { Box, Code, Flex, Table, Text } from '@radix-ui/themes'

import { DEFAULT_ROTATE_BACKGROUND } from '@libs/Sharp'

const previewBoxStyle = {
  backgroundColor: DEFAULT_ROTATE_BACKGROUND
}

export function RotateBackgroundRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Rotate background</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          If you rotate by an angle other than a multiple of <Code variant='ghost'>90°</Code>, the
          background color set with the background option will be visible.
        </Text>
      </Table.Cell>
      <Flex asChild align='center' gap='2' height='100%'>
        <Table.Cell>
          <Code size='3'>{DEFAULT_ROTATE_BACKGROUND}</Code>
          <Box width='4' height='4' style={previewBoxStyle} />
        </Table.Cell>
      </Flex>
    </Table.Row>
  )
}
