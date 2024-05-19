import dynamic from 'next/dynamic'
import { Flex, ScrollArea } from '@radix-ui/themes'

import { GallerySlideSkeleton } from './components/gallery-slide-skeleton'
import { slides } from './slides'
import styles from './page.module.css'

const GallerySlide = dynamic(() => import('./components/gallery-slide'), {
  ssr: false,
  loading: () => <GallerySlideSkeleton />
})

const GalleryPage = () => (
  <ScrollArea scrollbars='vertical' size='2' className={styles.root}>
    <Flex direction='row' wrap='wrap' justify='start' width='100%' p='4' className={styles.content}>
      {slides.map((slide, index) => (
        <GallerySlide key={index + slide.beforeSrc + slide.afterSrc} index={index} {...slide} />
      ))}
    </Flex>
  </ScrollArea>
)

export default GalleryPage
