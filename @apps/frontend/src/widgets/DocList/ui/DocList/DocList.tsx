import { Code, Flex, Link, Table, Text } from '@radix-ui/themes'

import { MinusIcon } from '@scissors/react-icons/MinusIcon'
import {
  DEFAULT_BLUR_SIGMA,
  MAX_BLUR_SIGMA,
  MIN_BLUR_SIGMA,
  MIN_NORMALIZE,
  MAX_NORMALIZE,
  MIN_LIGHTNESS,
  MAX_LIGHTNESS,
  MIN_BRIGHTNESS,
  MAX_BRIGHTNESS,
  MIN_SATURATION,
  MAX_SATURATION,
  MIN_HUE,
  MAX_HUE,
  DEFAULT_ROTATE_ANGLE,
  DEFAULT_ROTATE_BACKGROUND
} from '@scissors/sharp'

import { DocSection } from '../DocSection/DocSection'

export const DocList = () => (
  <Flex direction='column' gapY='6'>
    <DocSection
      title='Common'
      hash='#common'
      tableContent={
        <>
          <Table.Row>
            <Table.Cell width='230px'>
              <Code variant='ghost'>Flip</Code>
            </Table.Cell>
            <Table.Cell width='200px'>
              <Code variant='ghost' color='gray'>
                disabled
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                Mirror the image vertically <Text weight='medium'>(up-down)</Text> about the x-axis
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Code variant='ghost'>Flop</Code>
            </Table.Cell>
            <Table.Cell>
              <Code variant='ghost' color='gray'>
                disabled
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                Mirror the image horizontally <Text weight='medium'>(left-right)</Text> about the
                y-axis
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Code variant='ghost'>Grayscale</Code>
            </Table.Cell>
            <Table.Cell>
              <Code variant='ghost' color='gray'>
                disabled
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                Convert to <Code variant='ghost'>8-bit</Code> grayscale; 256 shades of gray
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Code variant='ghost'>Negate</Code>
            </Table.Cell>
            <Table.Cell>
              <Code variant='ghost' color='gray'>
                disabled
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>Produce the negative of the image.</Text>
            </Table.Cell>
          </Table.Row>
        </>
      }
    />
    <DocSection
      title='Modulation'
      hash='#modulation'
      tableContent={
        <>
          <Table.Row>
            <Table.Cell width='230px'>
              <Code variant='ghost'>Lightness</Code>
            </Table.Cell>
            <Table.Cell width='200px'>
              <Code variant='ghost' color='gray'>
                {MIN_LIGHTNESS}%
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                The lightness of the image. The value ranges from{' '}
                <Code variant='ghost'>{MIN_LIGHTNESS}%</Code> to{' '}
                <Code variant='ghost'>{MAX_LIGHTNESS}%</Code>.
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Code variant='ghost'>Brightness</Code>
            </Table.Cell>
            <Table.Cell>
              <Code variant='ghost' color='gray'>
                {MIN_BRIGHTNESS}
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                The brightness of the image. The value ranges from{' '}
                <Code variant='ghost'>{MIN_BRIGHTNESS}</Code> to{' '}
                <Code variant='ghost'>{MAX_BRIGHTNESS}</Code>
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Code variant='ghost'>Saturation</Code>
            </Table.Cell>
            <Table.Cell>
              <Code variant='ghost' color='gray'>
                {MIN_SATURATION}
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                The saturation of the image. The value ranges from{' '}
                <Code variant='ghost'>{MIN_SATURATION}</Code> to{' '}
                <Code variant='ghost'>{MAX_SATURATION}</Code>
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Code variant='ghost'>Hue angle</Code>
            </Table.Cell>
            <Table.Cell>
              <Code variant='ghost' color='gray'>
                {MIN_HUE}
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                The hue of the image. The value ranges from <Code variant='ghost'>{MIN_HUE}</Code>{' '}
                to <Code variant='ghost'>{MAX_HUE}</Code>
              </Text>
            </Table.Cell>
          </Table.Row>
        </>
      }
    />
    <DocSection
      title='Colorization'
      hash='#colorization'
      tableContent={
        <>
          <Table.Row>
            <Table.Cell width='230px'>
              <Code variant='ghost'>Tint</Code>
            </Table.Cell>
            <Table.Cell width='200px'>
              <RowValueFallback />
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                Tint the image using the provided chroma while preserving the image luminance
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Code variant='ghost'>Gamma</Code>
            </Table.Cell>
            <Table.Cell>
              <RowValueFallback />
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                Applies gamma correction (in the range between <Code variant='ghost'>1</Code> and{' '}
                <Code variant='ghost'>3</Code>) by decreasing the preliminary encoding size
                (darkening) by a factor of <Code variant='ghost'>1 / gamma</Code> and then
                increasing the subsequent encoding size (brightening) by a factor of gamma.
              </Text>
            </Table.Cell>
          </Table.Row>
        </>
      }
    />
    <DocSection
      title='Rotation'
      hash='#rotation'
      tableContent={
        <>
          <Table.Row>
            <Table.Cell width='230px'>
              <Code variant='ghost'>Angle</Code>
            </Table.Cell>
            <Table.Cell width='200px'>
              <Code variant='ghost' color='gray'>
                {DEFAULT_ROTATE_ANGLE}°
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>Rotates the image to a specified angle</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Code variant='ghost'>Fallback color</Code>
            </Table.Cell>
            <Table.Cell>
              <Code variant='ghost' color='gray'>
                {DEFAULT_ROTATE_BACKGROUND}
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                If you rotate by an <Code variant='ghost'>angle</Code> other than a multiple of{' '}
                <Code variant='ghost'>90°</Code>, the color set with the background option will be
                visible.
              </Text>
            </Table.Cell>
          </Table.Row>
        </>
      }
    />
    <DocSection
      title='Advanced'
      hash='#advanced'
      tableContent={
        <>
          <Table.Row>
            <Table.Cell width='230px'>
              <Code variant='ghost'>Blur</Code>
            </Table.Cell>
            <Table.Cell width='200px'>
              <Code variant='ghost' color='gray'>
                {DEFAULT_BLUR_SIGMA}
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Text as='p'>
                A value between <Code variant='ghost'>{MIN_BLUR_SIGMA}</Code> and{' '}
                <Code variant='ghost'>{MAX_BLUR_SIGMA}</Code> representing the sigma of the{' '}
                <Text weight='medium'>
                  <Link
                    target='_blank'
                    rel='noreferrer'
                    underline='always'
                    weight='medium'
                    href='https://en.wikipedia.org/wiki/Gaussian_blur'
                    ml='auto'
                    mt='2px'
                  >
                    Gaussian
                  </Link>
                </Text>{' '}
                mask (<code>sigma = 1 + radius / 2</code>)
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Code variant='ghost'>Normalize</Code>
            </Table.Cell>
            <Table.Cell>
              <Code variant='ghost' color='gray'>
                {MIN_NORMALIZE}% – {MAX_NORMALIZE}%
              </Code>
            </Table.Cell>
            <Table.Cell>
              <Flex direction='column' gapY='2'>
                <Text as='div'>
                  <Text as='p'>
                    Enhance the image contrast by stretching its luminance to cover a full dynamic
                    range
                  </Text>
                  <Text as='p'>
                    Uses a histogram-based approach, taking a range from{' '}
                    <Code variant='ghost'>{MIN_NORMALIZE}%</Code> to{' '}
                    <Code variant='ghost'>{MAX_NORMALIZE}%</Code> to reduce sensitivity to noise at
                    the extremes
                  </Text>
                </Text>

                <Text as='div'>
                  <Text as='p'>
                    Luminance values below the <Text weight='medium'>lower</Text> percentile will be
                    underexposed by clipping to zero
                  </Text>
                  <Text as='p'>
                    Luminance values above the <Text weight='medium'>upper</Text> percentile will be
                    overexposed by clipping to the max pixel value
                  </Text>
                </Text>
              </Flex>
            </Table.Cell>
          </Table.Row>
        </>
      }
    />
  </Flex>
)

const RowValueFallback = () => <MinusIcon color='gray' label='not settled' />
