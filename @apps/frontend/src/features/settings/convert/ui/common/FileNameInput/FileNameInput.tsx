import { type ChangeEvent, useEffect, useRef, useState } from 'react'
import { Flex, IconButton, TextField } from '@radix-ui/themes'

import { FileTextIcon } from '@scissors/react-icons/FileTextIcon'
import { Cross2Icon } from '@scissors/react-icons/Cross2Icon'

import { useEscapeBlur } from '@/shared/model'
import { isValidFileName, MAX_FILE_NAME_LENGTH, MIN_FILE_NAME_LENGTH } from '@/shared/file'
import type { TextFieldProps } from '@/shared/radix'

import { FileNameHint } from './FileNameHint/FileNameHint'
import { useCommonStore } from '../../../model/common/common.store'

const rootMaxWidth = {
  initial: '500px',
  md: '100%'
} as const

const errorProps: TextFieldProps = {
  color: 'red',
  variant: 'soft'
} as const

export const FileNameInput = () => {
  const fileName = useCommonStore(state => state.fileName)
  const setFileName = useCommonStore(state => state.setFileName)

  const [isError, setIsError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClear = () => setFileName('')
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value

    if (value.length === 0) {
      setFileName(ev.target.value)
      return setIsError(false)
    }

    const isValid = isValidFileName(value)

    if (!isValid) {
      setIsError(true)
    } else if (isError !== null) {
      setIsError(false)
    }

    setFileName(ev.target.value)
  }

  // TODO: REWORK
  // If the value is empty and "isError" is true, it is cleared
  useEffect(() => {
    if (fileName.length !== 0 || !isError) return

    setIsError(false)
  }, [fileName, isError])

  useEscapeBlur({
    ref: inputRef
  })

  return (
    <Flex gap='2' align='center' width='100%' maxWidth={rootMaxWidth}>
      <TextField.Root
        {...(isError ? errorProps : {})}
        ref={inputRef}
        type='text'
        placeholder='Output file name'
        radius='large'
        value={fileName}
        minLength={MIN_FILE_NAME_LENGTH}
        maxLength={MAX_FILE_NAME_LENGTH}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        <TextField.Slot>
          <FileTextIcon label='output file name' />
        </TextField.Slot>

        {fileName.length > 0 && (
          <TextField.Slot>
            <IconButton size='1' color='gray' variant='ghost' radius='full' onClick={handleClear}>
              <Cross2Icon label='clear' />
            </IconButton>
          </TextField.Slot>
        )}
      </TextField.Root>

      <FileNameHint />
    </Flex>
  )
}
