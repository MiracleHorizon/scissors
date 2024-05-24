import type { FC } from 'react'

import styles from './ExtractRegionPreview.module.css'

interface Props {
  file: File
  aspectRatio: number
}

export const ExtractRegionPreview: FC<Props> = ({ file, aspectRatio }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={URL.createObjectURL(file)}
    width={200}
    height={200 / aspectRatio}
    alt='Extracted image preview'
    className={styles.image}
  />
)
