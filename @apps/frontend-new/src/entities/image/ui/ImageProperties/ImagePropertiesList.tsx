import { useMemo } from 'react'
import { Flex, Text } from '@radix-ui/themes'

import { FileIcon } from '@scissors/react-icons/FileIcon'
import { RatioIcon } from '@scissors/react-icons/RatioIcon'
import { DimensionsIcon } from '@scissors/react-icons/DimensionsIcon'

import { isValidAspectRatio } from '../../lib/isValidAspectRatio'
import { BYTES_IN_KB, BYTES_IN_MB, bytesToMegabytes } from '@/shared/file'
import type { AspectRatio, ImageDimension } from '@/entities/image'

export const formatFileSize = (fileSize: number): string => {
  const format = (size: number) => size.toFixed(1).replace('.0', '')

  if (fileSize < BYTES_IN_KB) {
    return `${fileSize} B`
  } else if (fileSize < BYTES_IN_MB) {
    return `${format(fileSize / BYTES_IN_MB)} KB`
  }

  const megabytes = bytesToMegabytes(fileSize)

  return format(megabytes) + ' MB'
}

export const ImagePropertiesList = ({
  file,
  dimension,
  aspectRatio
}: {
  file: File
  dimension: ImageDimension
  aspectRatio: AspectRatio
}) => {
  const properties = useMemo(() => {
    const items = []

    const sizeItem = {
      label: 'Size',
      value: formatFileSize(file.size),
      icon: <FileIcon width='15px' height='15px' />
    }

    if (!dimension) {
      items.push(sizeItem)
      return items
    }

    items.push({
      label: 'Dimension',
      value: `${dimension[0]}x${dimension[1]}`,
      icon: <DimensionsIcon />
    })

    if (
      isValidAspectRatio({
        width: dimension[0],
        height: dimension[1],
        aspectRatio
      })
    ) {
      items.push({
        label: 'Aspect',
        value: `${aspectRatio[0]}:${aspectRatio[1]}`,
        icon: <RatioIcon width='16px' height='16px' />
      })
    }

    items.push(sizeItem)

    return items
  }, [dimension, aspectRatio, file.size])

  return (
    <Flex asChild direction='column' gapY='2'>
      <ul>
        {properties.map(item => (
          <Flex
            key={item.label}
            asChild
            width='100%'
            align='center'
            justify='between'
            title={`${item.label}: ${item.value}`}
          >
            <li>
              <Flex asChild align='center' wrap='nowrap' gapX='6px'>
                <Text size='2'>
                  {item.icon}
                  {item.label}
                </Text>
              </Flex>

              <Text size='1' as='span' weight='medium' color='gray'>
                {item.value}
              </Text>
            </li>
          </Flex>
        ))}
      </ul>
    </Flex>
  )
}
