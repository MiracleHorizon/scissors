import { Flex } from '@radix-ui/themes'

import { PhotoGallery } from '@/widgets/PhotoGallery'

export const GalleryPage = () => (
  <Flex
    width='100dvw'
    height='calc(100dvh - var(--layout-header-height))'
    justify='center'
    align='center'
  >
    <PhotoGallery />
  </Flex>
)
