import {
  type CSSProperties,
  type FC,
  Fragment,
  memo,
  type ReactNode,
  useEffect,
  useMemo,
  useState
} from 'react'
import { Flex, Separator, Text } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'

import { FileIcon } from '@scissors/react-icons/FileIcon'
import { RatioIcon } from '@scissors/react-icons/RatioIcon'
import { DimensionsIcon } from '@scissors/react-icons/DimensionsIcon'

import { getAspectRatio, getFileSize, getImageDimension, isCorrectAspectRatio } from './utils'
import type { Dimension } from './types'
import styles from './UploadedFileProperties.module.css'

export const UploadedFileProperties: FC<Props> = memo(({ file }) => {
  const [dimension, setDimension] = useState<Dimension | null>(null)

  const properties = useMemo(() => {
    const items: PropertyItemModel[] = [
      {
        label: 'Size',
        value: getFileSize(file.size),
        icon: <FileIcon width='15px' height='15px' />
      }
    ]

    if (!dimension) {
      return items
    }

    const { width, height } = dimension

    items.push({
      label: 'Dimension',
      value: `${width} x ${height}`,
      icon: <DimensionsIcon />
    })

    const ratio = getAspectRatio(width, height)
    if (isCorrectAspectRatio(ratio, width, height)) {
      items.push({
        label: 'Aspect',
        value: `${ratio[0]}:${ratio[1]}`,
        icon: <RatioIcon width='16px' height='16px' />
      })
    }

    return items
  }, [dimension, file.size])

  const rootStyle = {
    '--grid-item-count': properties.length
  } as const as CSSProperties

  useEffect(() => {
    getImageDimension(file).then(setDimension).catch(setDimension)
  }, [file])

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

interface Props {
  file: File
}

const PropertyItem: FC<PropertyItemModel> = ({ label, icon, value }) => (
  <Flex align='center' gap='3' title={`${label}: ${value}`} className={styles.propertyItem}>
    <Flex asChild align='center' wrap='nowrap' gap='1'>
      <Text>
        {icon}
        {label}
      </Text>
    </Flex>
    <Text as='span' weight='medium'>
      {value}
    </Text>
  </Flex>
)

interface PropertyItemModel {
  label: string
  value: string
  icon: ReactNode
}
