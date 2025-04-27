

import dynamic from 'next/dynamic'
import { type ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Flex, TextField } from '@radix-ui/themes'

import { isURL } from '@helpers/isURL'
import { isValidFileType } from '@helpers/file/isValidFileType'
import { isValidFileSize } from '@helpers/file/isValidFileSize'
import { cropImageFileType } from '@helpers/file/cropImageFileType'
import { createFileFromBlob } from '@helpers/file/createFileFromBlob'
import {
  INVALID_FILE_SIZE_MESSAGE,
  INVALID_FILE_TYPE_MESSAGE,
  DEFAULT_MESSAGE
} from '@lib/error-messages'

const FileSizeAlert = dynamic(
  () => import('@components/alerts/FileSizeAlert').then(mod => mod.FileSizeAlert),
  {
    ssr: false
  }
)
const FileTypeAlert = dynamic(
  () => import('@components/alerts/FileTypeAlert').then(mod => mod.FileTypeAlert),
  {
    ssr: false
  }
)
const DefaultErrorAlert = dynamic(
  () => import('@components/alerts/DefaultErrorAlert').then(mod => mod.DefaultErrorAlert),
  {
    ssr: false
  }
)

/* eslint no-unused-vars: 0 */
interface Props {
  onUpload: (file: File) => void
  value?: string
  setValue?: (value: string) => void
  shouldFocusOnRender?: boolean
}

export const ImageUploadForm = ({
  value,
  setValue,
  onUpload,
  shouldFocusOnRender = true
}: Props) => {
  const [error, setError] = useState<Error | null>(null)
  const [isValidURL, setIsValidURL] = useState(true)

  const onValueChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const v = ev.target.value

    if (v.length === 0) {
      setIsValidURL(true)
    } else {
      setIsValidURL(isURL(v))
    }

    setValue?.(v)
  }

  const handleUpload = async () => {
    if (!value) return

    try {
      const response = await fetch(value)
      if (!response.ok) {
        return setError?.(new Error(DEFAULT_MESSAGE))
      }

      const blob = await response.blob()

      if (!isValidFileType(blob.type)) {
        return setError(new Error(INVALID_FILE_TYPE_MESSAGE))
      }

      if (!isValidFileSize(blob.size)) {
        return setError(new Error(INVALID_FILE_SIZE_MESSAGE))
      }

      const fileType = cropImageFileType(blob.type)
      const fileName = `image.${fileType}`
      const file = createFileFromBlob(blob, fileName)

      onUpload(file)
    } catch (err) {
      console.log(err)
      setError(new Error(DEFAULT_MESSAGE))
    }
  }

  const handleResetState = useCallback(() => {
    setValue?.('')
    setError(null)
    setIsValidURL(true)
  }, [setValue])

  useEffect(() => {
    if (typeof value !== 'undefined' && value.length === 0) {
      handleResetState()
    }
  }, [value, handleResetState])

  return (
    <>
      <Flex asChild align='center' gap='2' width='100%'>
        <form onSubmit={ev => ev.preventDefault()}>
          <TextField.Root
            tabIndex={shouldFocusOnRender ? 0 : -1}
            color={!isValidURL || error !== null ? 'red' : undefined}
            value={value}
            placeholder='Paste link to an image...'
            className='w-full'
            onChange={onValueChange}
          />

          <Button
            disabled={value?.length === 0 || !isValidURL || error !== null}
            onClick={handleUpload}
          >
            Upload
          </Button>
        </form>
      </Flex>

      {error !== null && <ErrorAlert message={error.message} onClose={handleResetState} />}
    </>
  )
}

interface ErrorAlertProps {
  message: string
  onClose: VoidFunction
}

const ErrorAlert = ({ message, onClose }: ErrorAlertProps) => {
  const props = useMemo(() => ({ open: true, onClose }), [onClose])

  // TODO: Проверить динамические импорты
  const Component = useMemo(() => {
    switch (message) {
      case INVALID_FILE_SIZE_MESSAGE:
        return FileSizeAlert
      case INVALID_FILE_TYPE_MESSAGE:
        return FileTypeAlert
      default:
        return DefaultErrorAlert
    }
  }, [message])

  return <Component {...props} />
}
