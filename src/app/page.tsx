'use client'

import { AxiosError } from 'axios'
import dynamic from 'next/dynamic'
import { Box, Flex, type PaddingProps } from '@radix-ui/themes'

import { FooterPanel } from '@components/FooterPanel'
import { SettingsPanel } from '@components/SettingsPanel'
import { UploadedFile } from '@components/UploadedFile'
import { FileUploadZone } from '@components/FileUploadZone'
import { useConvertStore } from '@stores/convert'
import { useConvertImage } from '@hooks/useConvertImage'
import { ALLOWED_IMAGE_FORMATS } from '@libs/Sharp'
import type { FlexDirection } from '@libs/radix'
import styles from './page.module.css'
import { useCallback } from 'react'

const RequestErrorAlert = dynamic(
  () => import('@components/RequestErrorAlert').then(mod => mod.RequestErrorAlert),
  { ssr: false }
)

const mainDirection: FlexDirection = {
  initial: 'column',
  md: 'row'
}
const mainPadding: PaddingProps = {
  pl: {
    initial: '0',
    md: '4'
  }
}
const contentPadding: PaddingProps = {
  pt: '5',
  px: {
    initial: '4',
    md: '0'
  }
}

export default function HomePage() {
  const file = useConvertStore(state => state.file)
  const setFile = useConvertStore(state => state.setFile)

  const { handleConvertImage, isPending, error, reset } = useConvertImage()

  const handleRetry = useCallback(() => {
    if (isPending) return
    handleConvertImage()
  }, [isPending, handleConvertImage])

  return (
    <Box width='100%'>
      <Flex width='100%' align='center' direction='column'>
        <Flex
          asChild
          justify='end'
          direction={mainDirection}
          width='100%'
          {...mainPadding}
          className={styles.main}
        >
          <main>
            <Flex direction='column' {...contentPadding} className={styles.content}>
              {error && error instanceof AxiosError && (
                <RequestErrorAlert open={!!error} error={error} reset={reset} retry={handleRetry} />
              )}
              {file ? (
                <UploadedFile file={file} isLoading={isPending} />
              ) : (
                <FileUploadZone accept={ALLOWED_IMAGE_FORMATS} setFile={setFile} />
              )}
            </Flex>
            <SettingsPanel />
          </main>
        </Flex>
        <FooterPanel isLoading={isPending} handleConvertImage={handleConvertImage} />
      </Flex>
    </Box>
  )
}
