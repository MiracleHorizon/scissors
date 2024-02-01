import { Flex, Heading, Text } from '@radix-ui/themes'
import type { FC } from 'react'

import { dmMono } from '@app/fonts'
import type { ClassNameProps } from '@app-types/ClassNameProps'

const DetailsItem: FC<SlideDetail> = ({ label, value }) => (
  <Text size='3' as='span'>
    {label}: {value}
  </Text>
)

export const GallerySlideInfo: FC<Props> = ({ label, details, className }) => (
  <Flex direction='column' width='100%' style={dmMono.style} className={className}>
    <Heading size='4' as='h4'>
      {label}
    </Heading>

    <Flex asChild direction='column' mt='1'>
      <article>
        {details.map(detail => (
          <DetailsItem key={detail.label} {...detail} />
        ))}
      </article>
    </Flex>
  </Flex>
)

interface Props extends ClassNameProps {
  label: string
  details: SlideDetail[]
}

/*
 * Representative expression of image processing settings.
 */
interface SlideDetail {
  label: string
  value: string | number
}
