'use client'

import { Box, Button, Flex } from '@radix-ui/themes'
import type { ChangeEvent } from 'react'

import { FileUploader } from '@ui/FileUploader'
import { FileDownload } from '@components/FileDownload'
import { Options } from '@components/options'
import { convertImage } from '@api/convertImage'
import { useConvertStore } from '@stores/convert'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'
import { cropFileNameExtension } from '@helpers/cropFileNameExtension'
import { ConvertFormat } from '@libs/Sharp'
import { themeColor } from '@shared/theme'
import styles from './page.module.css'

export default function HomePage() {
  const file = useConvertStore(state => state.file)
  const convertSettings = useConvertSettings()

  const setFile = useConvertStore(state => state.setFile)
  const setDownloadPayload = useConvertStore(state => state.setDownloadPayload)

  async function handleConvertImage() {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)
    formData.append('settings', JSON.stringify(convertSettings))

    const url = window.location.origin + '/api/convert'
    const imageBlob = await convertImage({ url, formData })

    const link = URL.createObjectURL(imageBlob)
    const fileFormat = file.type.replace('image/', '')
    const fileName = `${cropFileNameExtension(file.name)}.${fileFormat}`

    setDownloadPayload({
      link,
      fileName
    })
  }

  function handleFileChange(ev: ChangeEvent<HTMLInputElement>) {
    const fileList = ev.target.files
    if (!fileList) return

    const file = fileList.item(0)
    if (!file) return

    setFile(file)
    ev.target.value = ''
  }

  return (
    <Box width='100%'>
      <Flex py='6' width='100%' align='center' direction='column'>
        <Flex
          asChild
          px={{
            initial: '5',
            xs: '6'
          }}
          justify='start'
          direction='column'
          width='100%'
          className={styles.main}
        >
          <main>
            <FileUploader
              accept={Object.values(ConvertFormat)
                .map(format => `image/${format}`)
                .join(', ')}
              onChange={handleFileChange}
            />
            <FileDownload className={styles.fileDownload} />

            <Options />

            <Flex width='100%' asChild align='center' justify='end'>
              <footer>
                <Button disabled={!file} size='3' color={themeColor} onClick={handleConvertImage}>
                  Convert
                </Button>
              </footer>
            </Flex>
          </main>
        </Flex>
      </Flex>
    </Box>
  )
}
