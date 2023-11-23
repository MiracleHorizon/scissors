import { Code, Table, Text } from '@radix-ui/themes'

import { MAX_NORMALISE, MIN_NORMALISE } from '@libs/Sharp'

export function NormaliseRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Normalise</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='div'>
          <Text as='p'>
            Enhance the image contrast by stretching its luminance to cover a full dynamic range.
          </Text>
          <Text as='p'>
            Uses a histogram-based approach, taking a range from{' '}
            <Code variant='ghost'>{MIN_NORMALISE}%</Code> to{' '}
            <Code variant='ghost'>{MAX_NORMALISE}%</Code> to reduce sensitivity to noise at the
            extremes.
          </Text>
          <br />
          <Text as='p'>
            Luminance values below the lower percentile will be underexposed by clipping to zero.
          </Text>
          <Text as='p'>
            Luminance values above the upper percentile will be overexposed by clipping to the max
            pixel value.
          </Text>
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>1 - 99%</Code>
      </Table.Cell>
    </Table.Row>
  )
}
