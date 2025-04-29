import { lazy, Suspense, useState } from 'react'
import { Flex, ScrollArea } from '@radix-ui/themes'
import clsx from 'clsx'

import { SettingsPanel } from '@/widgets/SettingsPanel'
import { ImagePreview } from '@/widgets/ImagePreview'
import { ImageUploaderSkeleton } from '@/widgets/ImageUploader'
import { BackgroundGrid } from '@/shared/ui'
import styles from './Page.module.css'

const ImageUploader = lazy(() =>
  import('@/widgets/ImageUploader').then(module => ({
    default: module.ImageUploader
  }))
)

export const HomePage = () => {
  const [file, setFile] = useState<File | null>(null)

  return (
    <Flex width='100%' align='center' direction='column' className={styles.root}>
      <ScrollArea scrollbars='vertical' size='1' className={styles.scrollArea}>
        <Flex
          asChild
          justify='end'
          direction={{
            initial: 'column',
            md: 'row'
          }}
          width='100%'
          className={styles.main}
        >
          <main>
            <Flex
              direction='column'
              className={clsx(styles.preview, file && styles.previewWithFile)}
            >
              <BackgroundGrid className={styles.backgroundGrid} />

              <Flex px='4' width='100%' height='100%' className={styles.previewContent}>
                {file ? (
                  <ImagePreview file={file} setImage={() => {}} />
                ) : (
                  <Suspense fallback={<ImageUploaderSkeleton />}>
                    <ImageUploader setFile={setFile} />
                  </Suspense>
                )}
              </Flex>
            </Flex>

            <SettingsPanel />
          </main>
        </Flex>
      </ScrollArea>
    </Flex>
  )
}
