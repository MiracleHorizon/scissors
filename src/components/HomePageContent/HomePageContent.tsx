'use client'

import { AxiosError } from 'axios'
import dynamic from 'next/dynamic'
import { Flex, type PaddingProps } from '@radix-ui/themes'
import { useCallback } from 'react'

import { FooterPanel } from '@components/FooterPanel'
import { SettingsPanel } from '@components/SettingsPanel'
import { UploadedFileSkeleton } from '@components/UploadedFile/UploadedFileSkeleton'
import { FileUploadZone } from '@components/FileUploadZone'
import { useConvertStore } from '@stores/convert'
import { useConvertImage } from '@hooks/useConvertImage'
import { ALLOWED_IMAGE_FORMATS } from '@libs/Sharp'
import type { FlexDirection } from '@libs/radix'
import styles from './HomePageContent.module.css'

const RequestErrorAlert = dynamic(
  () => import('@components/RequestErrorAlert').then(mod => mod.RequestErrorAlert),
  { ssr: false }
)
const UploadedFile = dynamic(
  () => import('@components/UploadedFile').then(mod => mod.UploadedFile),
  {
    ssr: false,
    loading: () => <UploadedFileSkeleton />
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

export function HomePageContent() {
  const file = useConvertStore(state => state.file)
  const setFile = useConvertStore(state => state.setFile)

  const { handleConvertImage, isPending, error, reset } = useConvertImage()

  const handleRetry = useCallback(() => {
    if (isPending) return
    handleConvertImage()
  }, [isPending, handleConvertImage])

  return (
    <>
      <Flex
        asChild
        justify='end'
        direction={mainDirection}
        width='100%'
        className={styles.root}
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
    </>
  )
}
