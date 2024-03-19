import { Box, Code, Flex, Table, Text } from '@radix-ui/themes'
import { DEFAULT_EXTEND_BACKGROUND, DEFAULT_RESIZE_BACKGROUND } from '@scissors/sharp'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

const previewBoxStyle = {
  backgroundColor: DEFAULT_RESIZE_BACKGROUND
}

export function BackgroundRow() {
  return (
    <DocsTableRow
      label='background'
      description={
        <Text as='p'>
          Extending background color if <Code variant='ghost'>extend with</Code> option is equal to{' '}
          <Code>&quot;background&quot;</Code>
        </Text>
      }
      defaultValue={
        <Flex asChild align='center' gap='2' height='100%'>
          <Table.Cell>
            <Code color='gray' size='3'>
              {DEFAULT_EXTEND_BACKGROUND}
            </Code>
            <Box width='4' height='4' style={previewBoxStyle} />
          </Table.Cell>
        </Flex>
      }
    />
  )
}
