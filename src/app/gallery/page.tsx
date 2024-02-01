import dynamic from 'next/dynamic'
import { Flex, ScrollArea } from '@radix-ui/themes'

import { GallerySlideSkeleton } from './components/GallerySlideSkeleton'
import { slides } from './slides'
import styles from './page.module.css'

const GallerySlide = dynamic(() => import('./components/GallerySlide'), {
  ssr: false,
  loading: () => <GallerySlideSkeleton />
})

const GalleryPage = () => (
  <ScrollArea scrollbars='vertical' size='2' className={styles.root}>
    <Flex direction='column' align='center' width='100%' gap='1' p='4'>
      {slides.map((slide, index) => (
        <GallerySlide key={index + slide.beforeSrc + slide.afterSrc} index={index} {...slide} />
      ))}
    </Flex>
  </ScrollArea>
)

export default GalleryPage
