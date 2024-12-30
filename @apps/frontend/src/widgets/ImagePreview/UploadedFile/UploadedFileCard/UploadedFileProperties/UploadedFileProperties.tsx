import { type ComponentPropsWithoutRef, type CSSProperties, Fragment, memo, useMemo } from 'react'
import { Separator } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'

import { FileIcon } from '@scissors/react-icons/FileIcon'
import { RatioIcon } from '@scissors/react-icons/RatioIcon'
import { DimensionsIcon } from '@scissors/react-icons/DimensionsIcon'

import { PropertyItem } from './PropertyItem'
import { useImageStore } from '@stores/image'
import { bytesToMegabytes } from '@helpers/file/bytesToMegabytes'
import { isCorrectAspectRatio } from '@helpers/image/isCorrectAspectRatio'
import type { ImageAspectRatio, ImageDimension } from '@app-types/image'
import styles from './UploadedFileProperties.module.css'

interface Props {
  file: File
}

type PropertyItemProps = ComponentPropsWithoutRef<typeof PropertyItem>

const getFormattedFileSize = (fileSize: number): string => {
  const formatFileSize = (size: number) => size.toFixed(1).replace('.0', '')

  if (fileSize < 1000) {
    return `${fileSize} B`
  } else if (fileSize < 1000 * 1000) {
    return `${formatFileSize(fileSize / 1000)} KB`
  }

  return formatFileSize(bytesToMegabytes(fileSize)) + ' MB'
}
const getFormattedDimension = ({ width, height }: ImageDimension): string => `${width} x ${height}`
const getFormattedAspectRatio = (aspectRatio: ImageAspectRatio): string =>
  `${aspectRatio[0]}:${aspectRatio[1]}`

export const UploadedFileProperties = memo(({ file }: Props) => {
  const dimension = useImageStore(state => state.getDimension())
  const aspectRatio = useImageStore(state => state.getAspectRatio())

  const properties = useMemo(() => {
    const items: PropertyItemProps[] = [
      {
        label: 'Size',
        value: getFormattedFileSize(file.size),
        icon: <FileIcon width='15px' height='15px' />
      }
    ]

    if (!dimension) {
      return items
    }

    const { width, height } = dimension

    items.push({
      label: 'Dimension',
      value: getFormattedDimension(dimension),
      icon: <DimensionsIcon />
    })

    if (isCorrectAspectRatio(aspectRatio, width, height)) {
      items.push({
        label: 'Aspect',
        value: getFormattedAspectRatio(aspectRatio),
        icon: <RatioIcon width='16px' height='16px' />
      })
    }

    return items
  }, [dimension, aspectRatio, file.size])

  const rootStyle = {
    '--grid-item-count': properties.length
  } as const as CSSProperties

  return (
    <div style={rootStyle} className={styles.root}>
      {properties.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 && (
            <MediaQuery minWidth={701}>
              <Separator orientation='vertical' className={styles.separator} />
            </MediaQuery>
          )}
          <PropertyItem {...item} />
        </Fragment>
      ))}
    </div>
  )
})

UploadedFileProperties.displayName = 'UploadedFileProperties'
