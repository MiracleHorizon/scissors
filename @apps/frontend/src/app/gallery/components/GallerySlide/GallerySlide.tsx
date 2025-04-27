

import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'
import type { ComponentPropsWithoutRef } from 'react'

import { CompareSlider } from './CompareSlider'
import { AsideSkeleton } from './GallerySlideSkeleton'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@lib/theme/constants'
import type { GallerySlideInfo } from './GallerySlideInfo'
import styles from './GallerySlide.module.css'

const GallerySlideAside = dynamic(
  () => import('./GallerySlideAside').then(mod => mod.GallerySlideAside),
  {
    ssr: false,
    loading: () => <AsideSkeleton />
  }
)
const GallerySlidePopover = dynamic(
  () => import('./GallerySlidePopover').then(mod => mod.GallerySlidePopover),
  {
    ssr: false
  }
)

type Props = ComponentPropsWithoutRef<typeof CompareSlider> &
  ComponentPropsWithoutRef<typeof GallerySlideInfo>

const GallerySlide = ({
  index,
  afterSrc,
  beforeSrc,
  orientation = 'landscape',
  ...info
}: Props) => {
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

/*
 * Default export is required to import a client component inside a server component using next/dynamic.
 */
export default GallerySlide
