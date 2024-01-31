'use client'

import { Flex } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'
import type { ComponentPropsWithoutRef } from 'react'

import { CompareSlider } from './CompareSlider'
import { GallerySlideAside } from './GallerySlideAside'

export default function GallerySlide({ index, label, afterSrc, beforeSrc, details }: Props) {
  return (
    <Flex gap='2'>
      <CompareSlider index={index} beforeSrc={beforeSrc} afterSrc={afterSrc} />

      <MediaQuery minWidth={1025}>
        <GallerySlideAside label={label} details={details} />
      </MediaQuery>
    </Flex>
  )
}

interface Props
  extends ComponentPropsWithoutRef<typeof CompareSlider>,
    ComponentPropsWithoutRef<typeof GallerySlideAside> {
  label: string
}
