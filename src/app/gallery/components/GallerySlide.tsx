'use client'

import { Flex } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef } from 'react'

import { CompareSlider } from './CompareSlider'

export default function GallerySlide(props: Props) {
  return (
    <Flex>
      <CompareSlider {...props} />
    </Flex>
  )
}

type Props = ComponentPropsWithoutRef<typeof CompareSlider>
