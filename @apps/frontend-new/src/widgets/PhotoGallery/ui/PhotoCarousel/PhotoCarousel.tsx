import { Box, Flex, ScrollArea } from '@radix-ui/themes'
import clsx from 'clsx'

import styles from './PhotoCarousel.module.css'

export const PhotoCarousel = ({
  slides,
  selectedPhoto,
  onSelectPhoto
}: {
  slides: { label: string; beforeSrc: string }[]
  selectedPhoto: { label: string }
  // eslint-disable-next-line
  onSelectPhoto: (label: string, index: number) => void
}) => (
  <ScrollArea mt='4' type='always' scrollbars='horizontal' className={styles.root}>
    <Flex gapX='2' height='100px' px='1' pt='1'>
      {slides.map((slide, index) => (
        <PhotoCarouselItem
          key={slide.label}
          index={index}
          photo={slide}
          isSelected={selectedPhoto.label === slide.label}
          onSelectPhoto={onSelectPhoto}
        />
      ))}
    </Flex>
  </ScrollArea>
)

export const PhotoCarouselItem = ({
  photo,
  isSelected,
  index,
  onSelectPhoto
}: {
  photo: { label: string; beforeSrc: string }
  index: number
  isSelected: boolean
  // eslint-disable-next-line
  onSelectPhoto: (label: string, index: number) => void
}) => {
  const handleClick = () => onSelectPhoto(photo.label, index)

  return (
    <Box
      width='160px'
      height='90x'
      className={clsx(styles.item, isSelected && styles.itemSelected)}
      onClick={handleClick}
    >
      <img src={photo.beforeSrc} alt={photo.label} width='100%' height='100%' />
    </Box>
  )
}
