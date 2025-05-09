import { Code, Text } from '@radix-ui/themes'

import { MAX_LIGHTNESS, MIN_LIGHTNESS } from '@scissors/sharp'

import { DocsTableRow } from '@pages/docs/components/DocsTable/DocsTableRow'

export const LightnessRow = () => (
  <DocsTableRow
    label='lightness'
    description={
      <Text as='p'>
        The lightness of the image. The value ranges from{' '}
        <Code variant='ghost'>{MIN_LIGHTNESS}%</Code> to{' '}
        <Code variant='ghost'>{MAX_LIGHTNESS}%</Code>.
      </Text>
    }
    defaultValue={`${MIN_LIGHTNESS}%`}
  />
)
