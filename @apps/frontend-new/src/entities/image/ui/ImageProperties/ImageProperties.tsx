import { IconButton, Card, Flex, Text, Separator, Tooltip } from '@radix-ui/themes'
import { useState } from 'react'
import { clsx } from 'clsx'

import { TrashIcon } from '@scissors/react-icons/TrashIcon'
import { UploadIcon } from '@scissors/react-icons/UploadIcon'
import { EyeIcon } from '@scissors/react-icons/EyeIcon'
import { EyeOffIcon } from '@scissors/react-icons/EyeOffIcon'

import { ImagePropertiesList } from './ImagePropertiesList'
import { ConfirmDialog } from '@/shared/ui'
import styles from './ImageProperties.module.css'

export const ImageProperties = ({
  file,
  setFile,
  removeFile,
  loading
}: {
  file: File
  setFile: (file: File) => void
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

          <Actions loading={loading} removeFile={removeFile} />
        </Flex>
      </Card>
    )
  }

  return (
    <>
      <Flex gapX='1'>
        <Card size='1' className={clsx(styles.card, styles.actions)}>
          <Flex direction='column' gapY='6px'>
            <Actions loading={loading} removeFile={removeFile} />
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

            <ImagePropertiesList file={file} dimension={[100, 100]} aspectRatio={[16, 9]} />
          </Flex>
        </Card>
      </Flex>
    </>
  )
}

const Actions = ({ loading, removeFile }: { loading: boolean; removeFile: () => void }) => (
  <>
    <Tooltip hidden={loading} content='Upload new image'>
      <IconButton loading={loading} radius='large' color='gray'>
        <UploadIcon width='20px' height='20px' label='upload new image' />
      </IconButton>
    </Tooltip>

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
      triggerTooltip='Delete image'
    />
  </>
)
