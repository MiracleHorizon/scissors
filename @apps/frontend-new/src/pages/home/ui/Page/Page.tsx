import { Flex, ScrollArea } from '@radix-ui/themes'
import clsx from 'clsx'

import { SettingsPanel } from '@/widgets/SettingsPanel'
import { ImageUploader } from '@/widgets/ImageUploader'
import { ImagePreview } from '@/widgets/ImagePreview'
import { BackgroundGrid } from '@/shared/ui'
import { useImageStore } from '@/shared/image'
import styles from './Page.module.css'

export const HomePage = () => {
  const file = useImageStore(state => state.getFileForProcessing())
  const setOriginalImage = useImageStore(state => state.setOriginalImage)

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
                  <ImagePreview file={file} setFile={setOriginalImage} />
                ) : (
                  <ImageUploader setFile={setOriginalImage} />
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
