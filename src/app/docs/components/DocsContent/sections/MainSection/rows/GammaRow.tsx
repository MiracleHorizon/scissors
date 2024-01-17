import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_GAMMA } from '@server/sharp'

export function GammaRow() {
  return (
    <DocsTableRow
      label='gamma'
      description={
        <Text as='p'>
          Applies gamma correction (in the range between <Code variant='ghost'>1</Code> and{' '}
          <Code variant='ghost'>3</Code>) by decreasing the preliminary encoding size (darkening) by
          a factor of{' '}
          <Code variant='ghost'>
            <code>1 / gamma</code>
          </Code>{' '}
          and then increasing the subsequent encoding size (brightening) by a factor of gamma.
        </Text>
      }
      defaultValue={DEFAULT_GAMMA.value}
    />
  )
}
