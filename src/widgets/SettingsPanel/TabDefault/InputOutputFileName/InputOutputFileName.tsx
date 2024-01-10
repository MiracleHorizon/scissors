import dynamic from 'next/dynamic'
import { type ChangeEvent, memo, useCallback, useMemo, useRef, useState } from 'react'
import { Flex, TextField } from '@radix-ui/themes'

import { ButtonClear } from '@ui/ButtonClear'
import { FileTextIcon } from '@ui/icons/FileTextIcon'
import { ButtonInfoSkeleton } from '@ui/skeletons/ButtonInfoSkeleton'
import { useOutputStore } from '@stores/output'
import { useEscapeBlur } from '@hooks/useEscapeBlur'
import {
  isValidFileName,
  MAX_FILE_NAME_LENGTH,
  MIN_FILE_NAME_LENGTH
} from '@helpers/isValidFileName'
import type { TextFieldInputProps } from '@lib/theme'
import styles from './InputOutputFileName.module.css'

const PopoverOutputFileName = dynamic(
  () => import('./PopoverOutputFileName').then(mod => mod.PopoverOutputFileName),
  {
    ssr: false,
    loading: () => <ButtonInfoSkeleton />
  }
)

function InputOutputFileName() {
  const [isError, setIsError] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const outputFileName = useOutputStore(state => state.outputFileName)
  const setOutputFileName = useOutputStore(state => state.setOutputFileName)

  const inputProps = useMemo(() => {
    if (!isError) return

    return {
      color: 'red',
      variant: 'soft'
    } as TextFieldInputProps
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
      } else {
        // TODO: else if?
        if (isError !== null) {
          setIsError(false)
        }
      }

      setOutputFileName(ev.target.value)
    },
    [isError, setOutputFileName]
  )

  const handleClear = useCallback(() => {
    setOutputFileName('')
    setIsError(false)
  }, [setOutputFileName])

  useEscapeBlur({
    ref: inputRef
  })

  return (
    <Flex gap='2' align='center' width='100%' mb='2' className={styles.root}>
      <TextField.Root className={styles.textFieldRoot}>
        <TextField.Slot>
          <FileTextIcon label='output file name' />
        </TextField.Slot>

        <TextField.Input
          {...inputProps}
          ref={inputRef}
          mr='1'
          type='text'
          placeholder='Output file name'
          minLength={MIN_FILE_NAME_LENGTH}
          maxLength={MAX_FILE_NAME_LENGTH}
          value={outputFileName}
          onChange={handleChange}
        />

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
