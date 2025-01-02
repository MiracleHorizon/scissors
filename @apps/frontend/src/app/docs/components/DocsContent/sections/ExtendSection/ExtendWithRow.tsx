import { Fragment } from 'react'
import { Code, Text } from '@radix-ui/themes'

import { DEFAULT_EXTEND_WITH, EXTEND_WITH } from '@scissors/sharp'

import { DocsTableRow } from '@app/docs/components/DocsTable/DocsTableRow'

const values = Object.values(EXTEND_WITH)

export const ExtendWithRow = () => (
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
