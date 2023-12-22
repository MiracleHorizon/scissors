import { Fragment } from 'react'
import { Code, Text } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_RESIZE_FIT, ResizeFit } from '@server/Sharp'

export function FitRow() {
  return (
    <DocsTableRow
      label='Fit'
      description={
        <Text as='p'>
          How the image should be resized / cropped to fit the target dimension, one of{' '}
          {Object.values(ResizeFit).map((value, index) => (
            <Fragment key={value}>
              <Code variant='ghost'>{value}</Code>
              {index < Object.values(ResizeFit).length - 1 && ', '}
            </Fragment>
          ))}
          .
        </Text>
      }
      defaultValue={capitalize(DEFAULT_RESIZE_FIT)}
    />
  )
}
