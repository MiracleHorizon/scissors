import { Flex, ScrollArea } from '@radix-ui/themes'
import clsx from 'clsx'

import { SettingsPanel } from '@/widgets/SettingsPanel'
import { ImageUploader } from '@/widgets/ImageUploader'
import { ImagePreview } from '@/widgets/ImagePreview'
import { BackgroundGrid } from '@/shared/ui'
import { useImageStore } from '@/shared/image'
import styles from './Page.module.css'

export const HomePage = () => {
  const previewFile = useImageStore(state => state.previewFile)
  const downloadableFile = useImageStore(state => state.downloadableFile)
  const setOriginalFile = useImageStore(state => state.setOriginalFile)
  const removeOriginalFile = useImageStore(state => state.removeOriginalFile)

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
              className={clsx(styles.preview, previewFile && styles.previewWithFile)}
            >
              <BackgroundGrid className={styles.backgroundGrid} />

              <Flex px='4' width='100%' height='100%' className={styles.previewContent}>
                {previewFile ? (
                  <ImagePreview
                    fileForPreview={previewFile}
                    downloadableFile={downloadableFile}
                    setFile={setOriginalFile}
                    removeFile={removeOriginalFile}
                  />
                ) : (
                  <ImageUploader setFile={setOriginalFile} />
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
