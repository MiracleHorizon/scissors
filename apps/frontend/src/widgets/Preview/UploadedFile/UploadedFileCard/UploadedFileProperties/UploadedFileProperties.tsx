import { type CSSProperties, type FC, Fragment, memo, useEffect, useMemo, useState } from 'react'
import { Flex, Separator, Text } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'

import { getAspectRatio, getFileSize, getImageDimension } from './utils'
import type { Dimension } from './types'
import styles from './UploadedFileProperties.module.css'

export const UploadedFileProperties: FC<Props> = memo(({ file }) => {
  const [dimension, setDimension] = useState<Dimension | null>(null)

  const properties = useMemo(() => {
    const items = [
      {
        label: 'Size',
        value: getFileSize(file.size)
      }
    ]

    if (!dimension) {
      return items
    }

    const { width, height } = dimension

    items.push({
      label: 'Dimension',
      value: `${width} x ${height}`
    })

    const [widthRatio, heightRatio] = getAspectRatio(width, height)
    if (width !== widthRatio && height !== heightRatio) {
      items.push({
        label: 'Aspect',
        value: `${widthRatio}:${heightRatio}`
      })
    }

    return items
  }, [dimension, file.size])

  const rootStyle = {
    '--grid-item-count': properties.length
  } as CSSProperties

  useEffect(() => {
    getImageDimension(file).then(setDimension).catch(setDimension)
  }, [file])

  return (
    <div style={rootStyle} className={styles.root}>
      {properties.map(({ label, value }, index) => (
        <Fragment key={label}>
          {index > 0 && (
            <MediaQuery minWidth={701}>
              <Separator orientation='vertical' className={styles.separator} />
            </MediaQuery>
          )}
          <PropertyItem label={label} value={value} />
        </Fragment>
      ))}
    </div>
  )
})

UploadedFileProperties.displayName = 'UploadedFileProperties'

interface Props {
  file: File
}

const PropertyItem: FC<PropertyItemProps> = ({ label, value }) => (
  <Flex align='center' gap='3' title={`${label}: ${value}`} className={styles.propertyItem}>
    <Text as='span'>{label}</Text>
    <Text as='span' weight='medium'>
      {value}
    </Text>
  </Flex>
)

interface PropertyItemProps {
  label: string
  value: string
}
