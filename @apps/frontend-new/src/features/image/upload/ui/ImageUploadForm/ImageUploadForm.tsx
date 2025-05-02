import { type ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Button, Flex, Grid, Text, TextField } from '@radix-ui/themes'

import { isURL } from '@/shared/lib'
import {
  isValidFileSize,
  isValidFileType,
  MAX_FILE_SIZE_MB,
  removeMimeTypePrefix
} from '@/shared/file'

/* eslint no-unused-vars: 0 */
export const ImageUploadForm = ({
  value,
  setValue,
  onUpload,
  shouldFocusOnRender = true
}: {
  value?: string
  shouldFocusOnRender?: boolean
  setValue?: (value: string) => void
  onUpload: (file: File) => void
}) => {
  const [isValidURL, setIsValidURL] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleValueChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const v = ev.target.value

    if (v.length === 0) {
      setIsValidURL(true)
    } else {
      setIsValidURL(isURL(v))
    }

    setError(null)
    setValue?.(v)
  }

  const handleUpload = async () => {
    if (!value) return

    try {
      const response = await fetch(value)
      if (!response.ok) {
        return setError('Something went wrong')
      }

      const blob = await response.blob()

      if (!isValidFileType(blob.type)) {
        return setError('Invalid file type. Only images are allowed.')
      }

      if (!isValidFileSize(blob.size)) {
        return setError(`Invalid file size. Maximum file size is ${MAX_FILE_SIZE_MB}MB.`)
      }

      const fileType = removeMimeTypePrefix(blob.type)
      const fileName = `image.${fileType}`
      const file = new File([blob], fileName, {
        type: blob.type
      })

      onUpload(file)
    } catch (error) {
      console.error(`[ImageUploadForm] Error uploading image: ${error}`)

      setError('Something went wrong')
    }
  }

  const handleResetState = useCallback(() => {
    setValue?.('')
    setIsValidURL(true)
  }, [setValue])

  // TODO: Проверить, нужно ли это
  useEffect(() => {
    if (typeof value !== 'undefined' && value.length === 0) {
      handleResetState()
    }
  }, [value, handleResetState])

  return (
    <Grid asChild columns='1fr 80px' gap='2' width='100%'>
      <form onSubmit={ev => ev.preventDefault()}>
        <Flex direction='column' gap='1'>
          <TextField.Root
            value={value}
            radius='large'
            tabIndex={shouldFocusOnRender ? 0 : -1}
            color={error ? 'red' : undefined}
            placeholder='Paste link to an image'
            onChange={handleValueChange}
          />

          {error && (
            <Text size='2' color='red'>
              {error}
            </Text>
          )}
        </Flex>

        <Button
          radius='large'
          disabled={value?.length === 0 || !isValidURL || !!error}
          onClick={handleUpload}
        >
          Upload
        </Button>
      </form>
    </Grid>
  )
}
