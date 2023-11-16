'use client'

import { type ChangeEvent, useRef } from 'react'
import { Flex, Text } from '@radix-ui/themes'

import { themeColor } from '@shared/theme'
import styles from './FileUploader.module.css'

export function FileUploader(inputAttributes: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  function triggerInputClick() {
    if (!inputRef.current) return

    inputRef.current.click()
  }

  return (
    <Flex
      align='center'
      justify='center'
      height='9'
      p='2'
      color={themeColor}
      data-accent-color={themeColor}
      className={styles.root}
      onClick={triggerInputClick}
    >
      <Text as='span' weight='medium' size='4' color={themeColor}>
        Upload file
      </Text>
      <input ref={inputRef} type='file' className={styles.input} {...inputAttributes} />
    </Flex>
  )
}

interface Props {
  accept: string
  // eslint-disable-next-line no-unused-vars
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void
}
