'use client'

import { useState } from 'react'
import { Box, Button, Flex } from '@radix-ui/themes'

import { FileUploader } from '@components/FileUploader'
import { FileDownload } from '@components/FileDownload'
import { Options } from '@components/options'
import { convertImage } from '@api/convertImage'
import { useConvertStore } from '@stores/convert'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'
import { cropFileNameExtension } from '@helpers/cropFileNameExtension'
import { ConvertFormat } from '@libs/Sharp'
import type { Padding } from '@libs/radix'
import styles from './page.module.css'

const pxMain: Padding = {
  initial: '5',
  xs: '6'
}

export default function HomePage() {
  const [error, setError] = useState<Error | null>(null)

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

    try {
      const imageBlob = await convertImage({ url, formData })

      const link = URL.createObjectURL(imageBlob)
      const fileFormat = file.type.replace('image/', '')
      const convertFormat = convertSettings.format
      const fileName = `${cropFileNameExtension(file.name)}.${convertFormat ?? fileFormat}`

      setDownloadPayload({
        link,
        fileName
      })

      if (error) {
        setError(null)
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err)
      }
    }
  }

  return (
    <Box width='100%'>
      <Flex py='6' width='100%' align='center' direction='column'>
        <Flex
          asChild
          px={pxMain}
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
              setFile={setFile}
            />
            {error && (
              <pre>
                <code>{error?.message}</code>
              </pre>
            )}
            <FileDownload className={styles.fileDownload} />

            <Options />

            <Flex width='100%' asChild align='center' justify='end'>
              <footer>
                <Button disabled={!file} size='3' onClick={handleConvertImage}>
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
