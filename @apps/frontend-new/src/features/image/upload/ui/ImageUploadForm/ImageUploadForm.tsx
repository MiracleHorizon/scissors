import { type ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Button, Grid, TextField } from '@radix-ui/themes'

import {
  showSomethingWentWrongToast,
  showInvalidFileTypeToast,
  showInvalidFileSizeToast
} from '@/entities/toast'
import { isURL } from '@/shared/lib'
import { isValidFileSize, isValidFileType, removeMimeTypePrefix } from '@/shared/file'

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
  const [isError, setIsError] = useState(false)

  const handleValueChange = (ev: ChangeEvent<HTMLInputElement>) => {
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
        return showSomethingWentWrongToast()
      }

      const blob = await response.blob()

      if (!isValidFileType(blob.type)) {
        setIsError(true)
        return showInvalidFileTypeToast()
      }

      if (!isValidFileSize(blob.size)) {
        setIsError(true)
        return showInvalidFileSizeToast()
      }

      const fileType = removeMimeTypePrefix(blob.type)
      const fileName = `image.${fileType}`
      const file = new File([blob], fileName, {
        type: blob.type
      })

      onUpload(file)
    } catch (error) {
      console.error(`[ImageUploadForm] Error uploading image: ${error}`)

      setIsError(true)
      showSomethingWentWrongToast()
    }
  }

  const handleResetState = useCallback(() => {
    setValue?.('')
    setIsValidURL(true)
  }, [setValue])

  useEffect(() => {
    if (typeof value !== 'undefined' && value.length === 0) {
      handleResetState()
    }
  }, [value, handleResetState])

  return (
    <Grid asChild align='center' columns='1fr 100px' gap='2' width='100%'>
      <form onSubmit={ev => ev.preventDefault()}>
        <TextField.Root
          value={value}
          radius='large'
          tabIndex={shouldFocusOnRender ? 0 : -1}
          color={!isValidURL || isError ? 'red' : undefined}
          placeholder='Paste link to an image'
          onChange={handleValueChange}
        />

        <Button
          radius='large'
          disabled={value?.length === 0 || !isValidURL || isError}
          onClick={handleUpload}
        >
          Upload
        </Button>
      </form>
    </Grid>
  )
}
