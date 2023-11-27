'use client'

import { useCallback } from 'react'
import { Box, Button, Flex } from '@radix-ui/themes'

import { UploadedFile } from '@components/UploadedFile'
import { FileUploader } from '@components/FileUploader'
import { FileDownload } from '@components/FileDownload'
import { Options } from '@components/options'
import { useConvertStore } from '@stores/convert'
import { useConvertMutation } from '@hooks/useConvertMutation'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'
import { ConvertFormat } from '@libs/Sharp'
import type { Padding } from '@libs/radix'
import styles from './page.module.css'

const pxMain: Padding = {
  initial: '5',
  xs: '6'
}

export default function HomePage() {
  const convertSettings = useConvertSettings()

  const file = useConvertStore(state => state.file)
  const setFile = useConvertStore(state => state.setFile)

  const { mutate, isPending: isLoading, error } = useConvertMutation()

  const handleConvertImage = useCallback(() => {
    if (!file) return

    mutate({ file, settings: convertSettings })
  }, [mutate, file, convertSettings])

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
            {file ? (
              <UploadedFile file={file} isLoading={isLoading} />
            ) : (
              <FileUploader
                accept={Object.values(ConvertFormat)
                  .map(format => `image/${format}`)
                  .join(', ')}
                setFile={setFile}
              />
            )}
            {error && (
              <pre>
                <code>{error.message}</code>
              </pre>
            )}
            <FileDownload className={styles.fileDownload} />
            <Options />
            <Flex width='100%' asChild align='center' justify='end'>
              <footer>
                <Button disabled={!file || isLoading} size='3' onClick={handleConvertImage}>
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
