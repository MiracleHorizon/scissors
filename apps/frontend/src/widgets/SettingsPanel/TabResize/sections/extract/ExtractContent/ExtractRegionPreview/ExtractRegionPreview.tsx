import styles from './ExtractRegionPreview.module.css'

interface Props {
  file: File
  aspectRatio: number
}

export const ExtractRegionPreview = ({ file, aspectRatio }: Props) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={URL.createObjectURL(file)}
    width={200}
    height={200 / aspectRatio}
    alt='Extracted image preview'
    className={styles.image}
  />
)
