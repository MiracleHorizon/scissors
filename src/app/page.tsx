'use client'

import { AxiosError } from 'axios'
import dynamic from 'next/dynamic'
import { Box, Flex, type PaddingProps } from '@radix-ui/themes'
import { useCallback } from 'react'

import { FooterPanel } from '@components/FooterPanel'
import { SettingsPanel } from '@widgets/SettingsPanel'
import { UploadedFileLoading } from '@components/UploadedFile/UploadedFileLoading'
import { FileUploadZone } from '@components/uploading/FileUploadZone'
import { useOutputStore } from '@stores/output'
import { useConvertImage } from '@hooks/useConvertImage'
import { ALLOWED_IMAGE_FORMATS } from '@server/Sharp'
import type { FlexDirection } from '@lib/theme/radix'
import styles from './page.module.css'

const RequestErrorAlert = dynamic(
  () => import('@components/alerts/RequestErrorAlert').then(mod => mod.RequestErrorAlert),
  { ssr: false }
)
const UploadedFile = dynamic(
  () => import('@components/UploadedFile').then(mod => mod.UploadedFile),
  {
    ssr: false,
    loading: () => <UploadedFileLoading />
  }
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
  const file = useOutputStore(state => state.file)
  const setFile = useOutputStore(state => state.setFile)

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
          className={styles.main}
          {...mainPadding}
        >
          <main>
            <Flex {...contentPadding} direction='column' className={styles.content}>
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

        <FooterPanel isPending={isPending} handleConvertImage={handleConvertImage} />
      </Flex>
    </Box>
  )
}
