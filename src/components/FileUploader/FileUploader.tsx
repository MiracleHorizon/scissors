'use client'

import { type ChangeEvent, type DragEvent, useRef, useState } from 'react'
import { Flex, Text } from '@radix-ui/themes'
import { ImageIcon } from '@radix-ui/react-icons'
import cn from 'classnames'

import styles from './FileUploader.module.css'

export function FileUploader({ setFile, ...inputAttributes }: Props) {
  const [isDragOver, setIsDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  function triggerInputClick() {
    if (!inputRef.current) return

    inputRef.current.click()
  }

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    const fileList = ev.target.files
    if (!fileList) return

    const file = fileList.item(0)
    if (!file) return

    setFile(file)
    ev.target.value = ''
  }

  function handleDrop(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault()

    const fileList = ev.dataTransfer.files
    const firstFile = fileList.item(0)

    if (!firstFile) return

    setFile(firstFile)
    setIsDragOver(false)
  }

  function handleDragOver(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault()

    setIsDragOver(true)
  }

  const handleDragLeave = () => setIsDragOver(false)

  return (
    <Flex
      align='center'
      justify='center'
      height='9'
      p='2'
      className={cn(styles.root, {
        [styles.dragOver]: isDragOver
      })}
      onClick={triggerInputClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <Flex asChild align='center' gap='1'>
        <Text as='span' weight='medium' size='4'>
          Upload file
          <ImageIcon width='20px' height='20px' />
        </Text>
      </Flex>
      <input
        {...inputAttributes}
        ref={inputRef}
        type='file'
        className={styles.input}
        onChange={handleChange}
      />
    </Flex>
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  accept: string
  setFile: (file: File) => void
}
