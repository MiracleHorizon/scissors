import { Box, Code, Flex, Table, Text } from '@radix-ui/themes'

import { DEFAULT_ROTATE_BACKGROUND } from '@scissors/sharp'

import { DocsTableRow } from '@app/docs/components/DocsTable/DocsTableRow'

const previewBoxStyle = {
  backgroundColor: DEFAULT_ROTATE_BACKGROUND
}

export const BackgroundRow = () => (
  <DocsTableRow
    label='background'
    description={
      <Text as='p'>
        If you rotate by an <Code variant='ghost'>angle</Code> other than a multiple of{' '}
        <Code variant='ghost'>90°</Code>, the background color set with the background option will
        be visible.
      </Text>
    }
    defaultValue={
      <Flex asChild align='center' gap='2' height='100%'>
        <Table.Cell>
          <Code
            color='gray'
            size={{
              initial: '2',
              xs: '3'
            }}
          >
            {DEFAULT_ROTATE_BACKGROUND}
          </Code>
          <Box width='4' height='4' style={previewBoxStyle} />
        </Table.Cell>
      </Flex>
    }
  />
)
