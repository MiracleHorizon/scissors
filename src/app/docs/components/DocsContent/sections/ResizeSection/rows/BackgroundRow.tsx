import { Box, Code, Flex, Table, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_RESIZE_BACKGROUND, ResizeFit } from '@server/Sharp'

const previewBoxStyle = {
  backgroundColor: DEFAULT_RESIZE_BACKGROUND
}

export function BackgroundRow() {
  return (
    <DocsTableRow
      label='Background'
      description={
        <Text as='p'>
          Background color when <Text weight='medium'>fit</Text> is{' '}
          <Code variant='ghost'>{ResizeFit.CONTAIN}</Code>.
        </Text>
      }
      defaultValue={
        <Flex asChild align='center' gap='2' height='100%'>
          <Table.Cell>
            <Code size='3'>{DEFAULT_RESIZE_BACKGROUND}</Code>
            <Box width='4' height='4' style={previewBoxStyle} />
          </Table.Cell>
        </Flex>
      }
    />
  )
}
