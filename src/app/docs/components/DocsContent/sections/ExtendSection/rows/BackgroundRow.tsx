import { Box, Code, Flex, Table, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_EXTEND_BACKGROUND, DEFAULT_RESIZE_BACKGROUND } from '@server/Sharp'

const previewBoxStyle = {
  backgroundColor: DEFAULT_RESIZE_BACKGROUND
}

export function BackgroundRow() {
  return (
    <DocsTableRow
      label='Background'
      description={
        <Text as='p'>
          Extending background color if{' '}
          <Text as='span' weight='medium'>
            &quot;extends with&quot;
          </Text>{' '}
          option is equal to <Code variant='ghost'>background</Code>
        </Text>
      }
      defaultValue={
        <Flex asChild align='center' gap='2' height='100%'>
          <Table.Cell>
            <Code size='3'>{DEFAULT_EXTEND_BACKGROUND}</Code>
            <Box width='4' height='4' style={previewBoxStyle} />
          </Table.Cell>
        </Flex>
      }
    />
  )
}
