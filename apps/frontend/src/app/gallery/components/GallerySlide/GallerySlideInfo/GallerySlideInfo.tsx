import { Flex, Heading } from '@radix-ui/themes'
import type { ConvertSettings } from '@scissors/sharp'
import type { ComponentPropsWithoutRef } from 'react'

import { ButtonDownload } from '@ui/ButtonDownload'
import { GallerySlideDetailItem } from './GallerySlideDetailItem'
import { createAndDownloadJSONFile } from '@utility/json-file'
import { geistMono } from '@app/fonts'
import { SITE_TITLE } from '@site/config'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './GallerySlideInfo.module.css'

interface Props extends ClassNameProps {
  index: number
  label: string
  details: ComponentPropsWithoutRef<typeof GallerySlideDetailItem>[]
  settings: Partial<ConvertSettings>
}

export const GallerySlideInfo = ({ index, label, settings, details, className }: Props) => (
  <Flex direction='column' width='100%' style={geistMono.style} className={className}>
    <Heading size='4' as='h4'>
      {label}
    </Heading>

    <Flex asChild direction='column' mt='1'>
      <article>
        {details.map(detail => (
          <GallerySlideDetailItem key={detail.label} {...detail} />
        ))}
      </article>
    </Flex>

    <ExportSettings index={index} settings={settings} />
  </Flex>
)

const ExportSettings = ({ index, settings }: Pick<Props, 'index' | 'settings'>) => {
  const handleExport = () =>
    createAndDownloadJSONFile({
      fileName: `${SITE_TITLE.toLowerCase()}-slide-${index + 1}-settings`,
      payload: settings
    })

  return (
    <Flex mt='2' className={styles.export}>
      <ButtonDownload onClick={handleExport} />
    </Flex>
  )
}
