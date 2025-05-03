import { IconButton, Card, Flex, Text, Separator, Tooltip } from '@radix-ui/themes'
import { Suspense, useState } from 'react'
import { clsx } from 'clsx'

import { TrashIcon } from '@scissors/react-icons/TrashIcon'
import { UploadIcon } from '@scissors/react-icons/UploadIcon'
import { EyeIcon } from '@scissors/react-icons/EyeIcon'
import { EyeOffIcon } from '@scissors/react-icons/EyeOffIcon'
import { ALLOWED_IMAGE_FORMATS } from '@scissors/sharp'

import { ImagePropertiesList } from './ImagePropertiesList'
import { ImageUploadDialog } from '@/widgets/ImageUploadDialog'
import { ConfirmDialog } from '@/shared/ui'
import styles from './ImageProperties.module.css'

// TODO: Это не entity. Widget?
/* eslint no-unused-vars: 0 */
export const ImageProperties = ({
  file,
  setFile,
  removeFile,
  loading
}: {
  file: File
  setFile: (file: File | null) => void
  removeFile: () => void
  loading: boolean
}) => {
  const [isPropertiesShown, setIsPropertiesShown] = useState(true)

  const showProperties = () => setIsPropertiesShown(true)
  const hideProperties = () => setIsPropertiesShown(false)

  if (!isPropertiesShown) {
    return (
      <Card className={clsx(styles.card, styles.actions)}>
        <Flex gapX='6px'>
          <Tooltip content='Show properties'>
            <IconButton radius='large' color='gray' onClick={showProperties}>
              <EyeIcon width='24px' height='24px' label='show properties' />
            </IconButton>
          </Tooltip>

          <Actions loading={loading} setFile={setFile} removeFile={removeFile} />
        </Flex>
      </Card>
    )
  }

  return (
    <>
      <Flex gapX='1'>
        <Card size='1' className={clsx(styles.card, styles.actions)}>
          <Flex direction='column' gapY='6px'>
            <Actions loading={loading} setFile={setFile} removeFile={removeFile} />
          </Flex>
        </Card>

        <Card size='2' className={clsx(styles.card, styles.properties)}>
          <Flex direction='column'>
            <Flex asChild justify='between' align='center' gapX='3'>
              <header>
                <Text title={file.name} size='2' truncate className={styles.fileName}>
                  {file.name}
                </Text>

                <Tooltip content='Hide properties'>
                  <IconButton
                    radius='full'
                    variant='ghost'
                    color='gray'
                    mb='2'
                    onClick={hideProperties}
                  >
                    <EyeOffIcon width='20px' height='20px' opacity='0.5' label='hide properties' />
                  </IconButton>
                </Tooltip>
              </header>
            </Flex>

            <Separator orientation='horizontal' size='4' mt='2px' mb='2' />

            <Suspense>
              <ImagePropertiesList file={file} />
            </Suspense>
          </Flex>
        </Card>
      </Flex>
    </>
  )
}

const Actions = ({
  loading,
  setFile,
  removeFile
}: {
  loading: boolean
  setFile: (file: File | null) => void
  removeFile: () => void
}) => (
  <>
    <ImageUploadDialog
      accept={ALLOWED_IMAGE_FORMATS}
      setFile={setFile}
      trigger={
        <IconButton loading={loading} radius='large' color='gray'>
          <UploadIcon width='20px' height='20px' label='upload new image' />
        </IconButton>
      }
      triggerTooltip={!loading ? 'Upload new image' : undefined}
    />

    <ConfirmDialog
      title='Confirm deletion'
      description='Are you sure you want to delete this image?'
      confirmLabel='Delete'
      onConfirm={removeFile}
      trigger={
        <IconButton loading={loading} radius='large' color='red'>
          <TrashIcon width='24px' height='24px' label='delete image' />
        </IconButton>
      }
      triggerTooltip={!loading ? 'Delete image' : undefined}
    />
  </>
)
