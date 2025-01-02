import { Code, Text } from '@radix-ui/themes'

import { DEFAULT_GAMMA } from '@scissors/sharp'

import { DocsTableRow } from '@app/docs/components/DocsTable/DocsTableRow'

export const GammaRow = () => (
  <DocsTableRow
    label='gamma'
    description={
      <Text as='p'>
        Applies gamma correction (in the range between <Code variant='ghost'>1</Code> and{' '}
        <Code variant='ghost'>3</Code>) by decreasing the preliminary encoding size (darkening) by a
        factor of <Code variant='ghost'>1 / gamma</Code> and then increasing the subsequent encoding
        size (brightening) by a factor of gamma.
      </Text>
    }
    defaultValue={DEFAULT_GAMMA}
  />
)
