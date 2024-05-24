import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FC,
  Fragment,
  memo,
  useEffect,
  useMemo,
  useState
} from 'react'
import { Separator } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'

import { FileIcon } from '@scissors/react-icons/FileIcon'
import { RatioIcon } from '@scissors/react-icons/RatioIcon'
import { DimensionsIcon } from '@scissors/react-icons/DimensionsIcon'

import { getAspectRatio, getFileSize, getImageDimension, isCorrectAspectRatio } from './utils'
import { PropertyItem } from './PropertyItem'
import type { Dimension } from './types'
import styles from './UploadedFileProperties.module.css'

interface Props {
  file: File
}

type PropertyItemProps = ComponentPropsWithoutRef<typeof PropertyItem>

export const UploadedFileProperties: FC<Props> = memo(({ file }) => {
  const [dimension, setDimension] = useState<Dimension | null>(null)

  const properties = useMemo(() => {
    const items: PropertyItemProps[] = [
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
