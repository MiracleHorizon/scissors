import { Fragment } from 'react'
import { Code, Table, Text } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { DEFAULT_RESIZE_FIT, ResizeFit } from '@libs/Sharp'
import { themeColor } from '@shared/theme'

export function FitRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Fit</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          How the image should be resized / cropped to fit the target dimension, one of{' '}
          {Object.values(ResizeFit).map((value, index) => (
            <Fragment key={value}>
              <Code variant='ghost' color={themeColor}>
                {value}
              </Code>
              {index < Object.values(ResizeFit).length - 1 && ', '}
            </Fragment>
          ))}
          .
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3' color={themeColor}>
          {capitalize(DEFAULT_RESIZE_FIT)}
        </Code>
      </Table.Cell>
    </Table.Row>
  )
}
