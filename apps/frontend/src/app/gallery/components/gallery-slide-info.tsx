import { Flex, Heading, Text } from '@radix-ui/themes'
import type { FC } from 'react'
import type { ConvertSettings } from '@scissors/sharp'

import { ButtonDownload } from '@ui/button-download'
import { useExportJSON } from '@hooks/useExportJSON'
import { geistMono } from '@app/fonts'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './gallery-slide-info.module.css'

const DetailsItem: FC<SlideDetail> = ({ label, value }) => (
  <Text as='div'>
    {label}: <Text weight='medium'>{value}</Text>
  </Text>
)

const ExportSettings = ({ index, settings }: Pick<Props, 'index' | 'settings'>) => {
  const { handleExportJSON } = useExportJSON()

  const handleExport = () =>
    handleExportJSON({
      fileName: `scissors-slide-${index + 1}-settings`,
      payload: settings
    })

  return (
    <Flex mt='2' className={styles.export}>
      <ButtonDownload onClick={handleExport} />
    </Flex>
  )
}

export const GallerySlideInfo: FC<Props> = ({ index, label, settings, details, className }) => (
  <Flex direction='column' width='100%' style={geistMono.style} className={className}>
    <Heading size='4' as='h4'>
      {label}
    </Heading>

    <Flex asChild direction='column' mt='1'>
      <article>
        {details.map(detail => (
          <DetailsItem key={detail.label} {...detail} />
        ))}
      </article>
    </Flex>

    <ExportSettings index={index} settings={settings} />
  </Flex>
)

interface Props extends ClassNameProps {
  index: number
  label: string
  details: SlideDetail[]
  settings: Partial<ConvertSettings>
}

/*
 * Representative expression of image processing settings.
 */
interface SlideDetail {
  label: string
  value: string | number
}
