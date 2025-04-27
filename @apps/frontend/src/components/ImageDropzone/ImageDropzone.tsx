

import { Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { PaddingProps } from '@radix-ui/themes/props'

import { ImagePlusIcon } from '@scissors/react-icons/ImagePlusIcon'

import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'
import styles from './ImageDropzone.module.css'

const padding: PaddingProps = {
  py: '4',
  px: {
    initial: '4',
    xs: '6'
  }
} as const

const ImageDropzone = ({
  children: fileInput,
  isDragOver,
  className,
  ...props
}: ComponentProps) => (
  <Flex
    {...padding}
    {...props}
    data-id='image-dropzone'
    data-cy='image-dropzone'
    title='File is not uploaded'
    align='center'
    justify='center'
    height='130px'
    gap='3'
    className={clsx(
      styles.root,
      {
        [styles.dragOver]: isDragOver
      },
      className
    )}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='var(--gray-a9)'
      className={styles.borderSvg}
    >
      <rect
        height='100%'
        width='100%'
        strokeWidth='3'
        strokeDasharray='4 8'
        rx='12'
        ry='12'
        strokeLinecap='square'
      />
    </svg>

    <Flex asChild align='center' justify='center' direction='column' className={styles.article}>
      <article>
        <ImagePlusIcon width='30px' height='30px' className={styles.icon} />

        <Text as='p' weight='medium' className={styles.title}>
          Drag image here or click to upload
        </Text>

        <Text as='p' weight='medium' className={styles.titleTouch}>
          Tap here for upload file
        </Text>

        <Text as='p' size='2' className={styles.extensions}>
          Format - JPG, PNG or WebP
        </Text>
      </article>
    </Flex>

    {fileInput}
  </Flex>
)

const Dropzone = withFileUploader(ImageDropzone)

export { Dropzone as ImageDropzone }
