'use client'

import { Flex } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'
import type { ComponentPropsWithoutRef, FC } from 'react'

import { CompareSlider } from './CompareSlider'
import { GallerySlideAside } from './GallerySlideAside'
import { GallerySlidePopover } from './GallerySlidePopover'
import { GallerySlideInfo } from './GallerySlideInfo'
import styles from './GallerySlide.module.css'

const GallerySlide: FC<Props> = ({ index, label, afterSrc, beforeSrc, details }) => (
  <Flex gap='2'>
    <Flex className={styles.sliderContainer}>
      <CompareSlider index={index} beforeSrc={beforeSrc} afterSrc={afterSrc} />

      <MediaQuery maxWidth={1024}>
        <GallerySlidePopover label={label} details={details} />
      </MediaQuery>
    </Flex>

    <MediaQuery minWidth={1025}>
      <GallerySlideAside label={label} details={details} />
    </MediaQuery>
  </Flex>
)

export default GallerySlide

interface Props
  extends ComponentPropsWithoutRef<typeof CompareSlider>,
    ComponentPropsWithoutRef<typeof GallerySlideInfo> {
  label: string
}
