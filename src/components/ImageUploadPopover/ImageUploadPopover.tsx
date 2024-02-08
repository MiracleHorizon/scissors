'use client'

import { Button, Flex, IconButton, Popover, TextField, Tooltip } from '@radix-ui/themes'
import { type ChangeEvent, useState } from 'react'

import { Link2Icon } from '@ui/icons/Link2Icon'
import { useOutputStore } from '@stores/output'
import { isValidFileType } from '@helpers/file/isValidFileType'
import { isValidFileSize } from '@helpers/file/isValidFileSize'
import { cropImageFileType } from '@helpers/file/cropImageFileType'
import { createFileFromBlob } from '@helpers/file/createFileFromBlob'
import styles from './ImageUploadPopover.module.css'

export function ImageUploadPopover() {
  // TODO: Валидация того, что значение - это ссылка
  const [value, setValue] = useState('')
  const setFile = useOutputStore(state => state.setFile)

  function onChange(ev: ChangeEvent<HTMLInputElement>) {
    const value = ev.target.value

    setValue(value)
  }

  async function handleUpload() {
    try {
      const response = await fetch(value)
      if (!response.ok) {
        return Promise.reject(new Error('Something went wrong. Please try again later'))
      }

      const blob = await response.blob()

      if (!isValidFileType(blob.type)) {
        return Promise.reject(new Error('Invalid file type'))
      }

      if (!isValidFileSize(blob.size)) {
        return Promise.reject(new Error('Invalid file size'))
      }

      const fileType = cropImageFileType(blob.type)
      const fileName = `image.${fileType}`
      const file = createFileFromBlob(blob, fileName)

      setFile(file)
    } catch (err) {
      console.error(err)
    }
  }

  return (
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
          <TextField.Root className='w-full'>
            <TextField.Input
              value={value}
              placeholder='Paste link to an image...'
              onChange={onChange}
            />
          </TextField.Root>

          <Button disabled={value.length === 0} onClick={handleUpload}>
            Upload
          </Button>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}
