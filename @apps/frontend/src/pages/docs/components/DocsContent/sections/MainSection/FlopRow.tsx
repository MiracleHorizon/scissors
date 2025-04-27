import { Code, Text } from '@radix-ui/themes'
import { DocsTableRow } from '@pages/docs/components/DocsTable/DocsTableRow'

export const FlopRow = () => (
  <DocsTableRow
    label='flop'
    description={
      <Text as='p'>
        Mirror the image horizontally <Code variant='ghost'>(left-right)</Code> about the y-axis.
      </Text>
    }
    defaultValue='disabled'
  />
)
