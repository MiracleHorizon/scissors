import { type ChangeEvent, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Flex, TextField } from '@radix-ui/themes'

import { FileTextIcon } from '@scissors/react-icons/FileTextIcon'

import { ButtonClear } from '@ui/ButtonClear'
import { PopoverOutputFileName } from './PopoverOutputFileName'
import { useOutputStore } from '@stores/output'
import { useEscapeBlur } from '@hooks/useEscapeBlur'
import { isValidFileName } from '@helpers/file/isValidFileName'
import { MAX_FILE_NAME_LENGTH, MIN_FILE_NAME_LENGTH } from '@helpers/file/constants'
import type { TextFieldProps } from '@lib/theme'

const rootMaxWidth = {
  initial: '500px',
  md: '100%'
} as const

const InputOutputFileName = () => {
  const [isError, setIsError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const outputFileName = useOutputStore(state => state.outputFileName)
  const setOutputFileName = useOutputStore(state => state.setOutputFileName)

  const inputProps = useMemo(() => {
    if (!isError) return

    return {
      color: 'red',
      variant: 'soft'
    } as TextFieldProps
  }, [isError])

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value

      if (value.length === 0) {
        setOutputFileName(ev.target.value)
        return setIsError(false)
      }

      const isValid = isValidFileName(value)

      if (!isValid) {
        setIsError(true)
      } else if (isError !== null) {
        setIsError(false)
      }

      setOutputFileName(ev.target.value)
    },
    [isError, setOutputFileName]
  )

  const handleClear = () => setOutputFileName('')

  // If the value is empty and "isError" is true, it is cleared
  useEffect(() => {
    if (outputFileName.length !== 0 || !isError) return

    setIsError(false)
  }, [outputFileName, isError])

  useEscapeBlur({
    ref: inputRef
  })

  return (
    <Flex gap='2' align='center' width='100%' maxWidth={rootMaxWidth}>
      <TextField.Root
        {...inputProps}
        ref={inputRef}
        mr='1'
        type='text'
        placeholder='Output file name'
        className='w-full'
        minLength={MIN_FILE_NAME_LENGTH}
        maxLength={MAX_FILE_NAME_LENGTH}
        value={outputFileName}
        data-cy='input-output-file-name'
        onChange={handleChange}
      >
        <TextField.Slot>
          <FileTextIcon label='output file name' />
        </TextField.Slot>

        {outputFileName.length > 0 && (
          <TextField.Slot>
            <ButtonClear onClick={handleClear} />
          </TextField.Slot>
        )}
      </TextField.Root>

      <PopoverOutputFileName />
    </Flex>
  )
}

const Memoized = memo(InputOutputFileName)

export { Memoized as InputOutputFileName }
