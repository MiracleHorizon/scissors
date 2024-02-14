'use client'

import dynamic from 'next/dynamic'
import { Button, Flex, IconButton, Popover, TextField, Tooltip } from '@radix-ui/themes'
import { type ChangeEvent, useState } from 'react'
import { string } from 'yup'

import { Link2Icon } from '@ui/icons/Link2Icon'
import { useOutputStore } from '@stores/output'
import { isValidFileType } from '@helpers/file/isValidFileType'
import { isValidFileSize } from '@helpers/file/isValidFileSize'
import { cropImageFileType } from '@helpers/file/cropImageFileType'
import { createFileFromBlob } from '@helpers/file/createFileFromBlob'
import styles from './ImageUploadPopover.module.css'

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

function isURL(value: string): boolean {
  const urlSchema = string().url().defined().required()
  return urlSchema.isValidSync(value)
}

const INVALID_FILE_SIZE_MESSAGE = 'Invalid file size'
const INVALID_FILE_TYPE_MESSAGE = 'Invalid file type'
const SOMETHING_WENT_WRONG_MESSAGE = 'Something went wrong. Please try again later'

export function ImageUploadPopover() {
  const [value, setValue] = useState('')
  const [error, setError] = useState<Error | null>(null)
  const [isValidURL, setIsValidURL] = useState(true)
  const setFile = useOutputStore(state => state.setFile)

  function onValueChange(ev: ChangeEvent<HTMLInputElement>) {
    const value = ev.target.value

    if (value.length === 0) {
      setIsValidURL(true)
    } else {
      setIsValidURL(isURL(value))
    }

    setValue(value)
  }

  async function handleUpload() {
    try {
      const response = await fetch(value)
      if (!response.ok) {
        return Promise.reject(new Error(SOMETHING_WENT_WRONG_MESSAGE))
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

      setFile(file)
    } catch (err) {
      if (err instanceof Error) {
        return setError(err)
      }

      // eslint-disable-next-line no-console
      console.log(err)
      setError(new Error(SOMETHING_WENT_WRONG_MESSAGE))
    }
  }

  function handleResetState() {
    setValue('')
    setError(null)
    setIsValidURL(true)
  }

  return (
    <>
      <Popover.Root>
        <Tooltip content='Upload an image using a link'>
          <Popover.Trigger>
            <IconButton color='gray' variant='outline'>
              <Link2Icon width='18px' height='18px' />
            </IconButton>
          </Popover.Trigger>
        </Tooltip>

        <Popover.Content align='center'>
          <Flex gap='2' className={styles.content}>
            <form className='w-full' onSubmit={ev => ev.preventDefault()}>
              <TextField.Root className='w-full'>
                <TextField.Input
                  color={!isValidURL || error !== null ? 'red' : undefined}
                  value={value}
                  placeholder='Paste link to an image...'
                  onChange={onValueChange}
                />
              </TextField.Root>
            </form>

            <Popover.Close>
              <Button
                disabled={value.length === 0 || !isValidURL || error !== null}
                onClick={handleUpload}
              >
                Upload
              </Button>
            </Popover.Close>
          </Flex>
        </Popover.Content>
      </Popover.Root>

      {error !== null && (
        <>
          {error.message === INVALID_FILE_SIZE_MESSAGE && (
            <FileSizeAlert open onClose={handleResetState} />
          )}

          {error.message === INVALID_FILE_TYPE_MESSAGE && (
            <FileTypeAlert open onClose={handleResetState} />
          )}
        </>
      )}
    </>
  )
}
