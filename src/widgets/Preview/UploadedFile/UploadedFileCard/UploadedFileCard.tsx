import { type FC, useCallback } from 'react'
import { Card, Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import MediaQuery from 'react-responsive'

import { UploadedFileProperties } from './UploadedFileProperties'
import { ConfirmAlert } from '@components/alerts/ConfirmAlert'
import { ImageFileIcon } from '@ui/icons/ImageFileIcon'
import { LoadingSpinner } from '@ui/LoadingSpinner'
import { ButtonDelete } from '@ui/ButtonDelete'
import { ButtonImport } from '@ui/ButtonImport'
import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'
import { ALLOWED_IMAGE_FORMATS } from '@server/sharp'
import styles from './UploadedFileCard.module.css'

export const UploadedFileCard: FC<Props> = ({ file }) => {
  const isRequestLoading = useRequestStore(state => state.isLoading)

  const setFile = useOutputStore(state => state.setFile)
  const removeFile = useOutputStore(state => state.removeFile)

  const handleRemoveFile = useCallback(() => removeFile(), [removeFile])

  return (
    <Card size='2' className={styles.card}>
      <Flex align='center' height='100%' width='100%' className={styles.root}>
        <MediaQuery minWidth={401}>
          <Flex align='center' justify='center' height='100%' className={styles.cardInset}>
            <ImageFileIcon width='28px' height='28px' />
          </Flex>
        </MediaQuery>

        <Flex direction='column' gap='1' mr='auto' className={styles.content}>
          <Text as='span' title={file.name} className={clsx(styles.fileName, 'truncate')}>
            {file.name}
          </Text>
          <UploadedFileProperties file={file} />
        </Flex>

        {isRequestLoading ? (
          <LoadingSpinner />
        ) : (
          <Flex
            direction='column'
            justify='center'
            align='center'
            gap='1'
            height='100%'
            className={styles.buttons}
          >
            <ButtonImport
              accept={ALLOWED_IMAGE_FORMATS}
              setFile={setFile}
              tooltipContent='Upload New File'
            />
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
