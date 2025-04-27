import { lazy, Suspense } from 'react'
import { Flex, ScrollArea } from '@radix-ui/themes'

import { GallerySlideSkeleton } from './components/GallerySlide/GallerySlideSkeleton'
import { slides } from './slides'
import styles from './page.module.css'

const GallerySlide = lazy(() =>
  import('./components/GallerySlide').then(mod => ({ default: mod.default }))
)

const GalleryPage = () => (
  <ScrollArea scrollbars='vertical' size='2' className={styles.root}>
    <Flex direction='row' wrap='wrap' justify='start' width='100%' p='4' className={styles.content}>
      {slides.map((slide, index) => (
        <Suspense
          key={index + slide.beforeSrc + slide.afterSrc}
          fallback={<GallerySlideSkeleton />}
        >
          <GallerySlide index={index} {...slide} />
        </Suspense>
      ))}
    </Flex>
  </ScrollArea>
)

export default GalleryPage
