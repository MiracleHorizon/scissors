'use client'

import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'
import type { ComponentPropsWithoutRef, FC } from 'react'

import { CompareSlider } from './compare-slider'
import { AsideSkeleton } from './gallery-slide-skeleton'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@lib/theme/constants'
import type { GallerySlideInfo } from './gallery-slide-info'
import styles from './gallery-slide.module.css'

const GallerySlideAside = dynamic(
  () => import('./gallery-slide-aside').then(mod => mod.GallerySlideAside),
  {
    ssr: false,
    loading: () => <AsideSkeleton />
  }
)
const GallerySlidePopover = dynamic(
  () => import('./gallery-slide-popover').then(mod => mod.GallerySlidePopover),
  {
    ssr: false
  }
)

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
          <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.md}>
            <GallerySlidePopover index={index} {...info} />
          </MediaQuery>
        )}
      </Flex>

      {isLandscape && (
        <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.md}>
          <GallerySlideAside index={index} {...info} />
        </MediaQuery>
      )}
    </Flex>
  )
}

export default GallerySlide

type Props = ComponentPropsWithoutRef<typeof CompareSlider> &
  ComponentPropsWithoutRef<typeof GallerySlideInfo>
