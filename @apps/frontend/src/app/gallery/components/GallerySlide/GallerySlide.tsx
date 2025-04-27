import { lazy, Suspense, type ComponentPropsWithoutRef } from 'react'
import { Flex } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'

import { CompareSlider } from './CompareSlider'
import { AsideSkeleton } from './GallerySlideSkeleton'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@lib/theme/constants'
import type { GallerySlideInfo } from './GallerySlideInfo'
import styles from './GallerySlide.module.css'

const GallerySlideAside = lazy(() =>
  import('./GallerySlideAside').then(mod => ({ default: mod.GallerySlideAside }))
)
const GallerySlidePopover = lazy(() =>
  import('./GallerySlidePopover').then(mod => ({ default: mod.GallerySlidePopover }))
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
          <Suspense fallback={null}>
            <GallerySlidePopover index={index} {...info} />
          </Suspense>
        ) : (
          <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.md}>
            <Suspense fallback={null}>
              <GallerySlidePopover index={index} {...info} />
            </Suspense>
          </MediaQuery>
        )}
      </Flex>

      {isLandscape && (
        <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.md}>
          <Suspense fallback={<AsideSkeleton />}>
            <GallerySlideAside index={index} {...info} />
          </Suspense>
        </MediaQuery>
      )}
    </Flex>
  )
}

/*
 * Default export is required to import a client component inside a server component using next/dynamic.
 */
export default GallerySlide
