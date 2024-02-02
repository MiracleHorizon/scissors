'use client'

import { Flex } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'
import type { ComponentPropsWithoutRef, FC } from 'react'

import { CompareSlider } from './CompareSlider'
import { GallerySlideAside } from './GallerySlideAside'
import { GallerySlidePopover } from './GallerySlidePopover'
import { GallerySlideInfo } from './GallerySlideInfo'
import styles from './GallerySlide.module.css'

const GallerySlide: FC<Props> = ({
  index,
  afterSrc,
  beforeSrc,
  orientation = 'landscape',
  ...info
}) => {
  const isPortrait = orientation === 'portrait'
  const isLandscape = orientation === 'landscape'

  return (
    <Flex
      gap='2'
      direction={isPortrait ? 'column' : 'row'}
      className={isPortrait ? styles.portrait : styles.landscape}
    >
      <Flex className={styles.sliderContainer}>
        <CompareSlider
          index={index}
          label={info.label}
          beforeSrc={beforeSrc}
          afterSrc={afterSrc}
          orientation={orientation}
        />

        {isPortrait ? (
          <GallerySlidePopover index={index} {...info} />
        ) : (
          <MediaQuery maxWidth={1024}>
            <GallerySlidePopover index={index} {...info} />
          </MediaQuery>
        )}
      </Flex>

      {isLandscape && (
        <MediaQuery minWidth={1025}>
          <GallerySlideAside index={index} {...info} />
        </MediaQuery>
      )}
    </Flex>
  )
}

export default GallerySlide

type Props = ComponentPropsWithoutRef<typeof CompareSlider> &
  ComponentPropsWithoutRef<typeof GallerySlideInfo>
