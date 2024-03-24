import { type FC, useCallback } from 'react'
import { Card, Flex, Spinner, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import MediaQuery from 'react-responsive'

import { UploadedFileProperties } from './UploadedFileProperties'
import { ConfirmAlert } from '@components/alerts/ConfirmAlert'
import { ImageUploadPopover } from '@components/ImageUploadPopover'
import { FileImageIcon } from '@ui/icons/FileImageIcon'
import { ButtonDelete } from '@ui/ButtonDelete'
import { ButtonUpload } from '@ui/ButtonUpload'
import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'
import { allowedImageFormats } from '@site/config'
import styles from './UploadedFileCard.module.css'

export const UploadedFileCard: FC<Props> = ({ file }) => {
  const isRequestLoading = useRequestStore(state => state.isLoading)

  const setFile = useOutputStore(state => state.setFile)
  const removeFile = useOutputStore(state => state.removeFile)

  const handleRemoveFile = useCallback(() => removeFile(), [removeFile])

  return (
    <Card size='2' className={styles.card}>
      <Flex align='center' height='100%' width='100%' className={styles.root}>
        <MediaQuery minWidth={601}>
          <Flex
            align='center'
            justify='center'
            flexShrink='0'
            height='100%'
            className={styles.cardInset}
          >
            <FileImageIcon width='28px' height='28px' />
          </Flex>
        </MediaQuery>

        <Flex direction='column' gap='1' mr='auto' className={styles.content}>
          <Text as='span' title={file.name} className={clsx(styles.fileName, 'truncate')}>
            {file.name}
          </Text>
          <UploadedFileProperties file={file} />
        </Flex>

        {!isRequestLoading ? (
          <Spinner mr='4' className={styles.spinner} />
        ) : (
          <Flex
            direction='column'
            justify='center'
            align='end'
            flexShrink='0'
            gap='1'
            pr='4'
            className={styles.buttonsContainer}
          >
            <Flex gap='1'>
              <ImageUploadPopover />
              <ButtonUpload
                accept={allowedImageFormats}
                setFile={setFile}
                tooltipContent='Upload New File'
              />
            </Flex>
            <ConfirmAlert
              title='Confirm deletion'
              description='Are you sure you want to continue?'
              confirmLabel='Delete'
              onConfirm={handleRemoveFile}
            >
              <ButtonDelete tooltipContent='Delete File' />
            </ConfirmAlert>
          </Flex>
        )}
      </Flex>
    </Card>
  )
}

interface Props {
  file: File
}
