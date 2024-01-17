import { Fragment } from 'react'
import { Code, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_RESIZE_FIT, RESIZE_FIT } from '@server/sharp'

const values = Object.values(RESIZE_FIT)

export function FitRow() {
  return (
    <DocsTableRow
      label='fit'
      description={
        <Text as='p'>
          How the image should be resized / cropped to fit the target dimension, one of{' '}
          {values.map((value, index) => (
            <Fragment key={value}>
              <Code>&quot;{value}&quot;</Code>
              {index < values.length - 1 && ', '}
            </Fragment>
          ))}
          .
        </Text>
      }
      defaultValue={`"${DEFAULT_RESIZE_FIT}"`}
    />
  )
}
