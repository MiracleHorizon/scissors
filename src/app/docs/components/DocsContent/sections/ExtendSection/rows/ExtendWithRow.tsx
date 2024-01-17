import { Code, Text } from '@radix-ui/themes'
import { Fragment } from 'react'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_EXTEND_WITH, EXTEND_WITH } from '@server/sharp'

const values = Object.values(EXTEND_WITH)

export function ExtendWithRow() {
  return (
    <DocsTableRow
      label='extend with'
      description={
        <Text as='p'>
          Populate new pixels using one of variants:{' '}
          {values.map((value, index) => (
            <Fragment key={value}>
              <Code>&quot;{value}&quot;</Code>
              {index < values.length - 1 && ', '}
            </Fragment>
          ))}
          .
        </Text>
      }
      defaultValue={`"${DEFAULT_EXTEND_WITH}"`}
    />
  )
}
