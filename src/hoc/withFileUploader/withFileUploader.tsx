import { type ChangeEvent, type ComponentType, type DragEvent, useRef, useState } from 'react'

import { FileSizeAlert } from '@components/FileSizeAlert'
import { isValidFileSize } from '@helpers/isValidFileSize'
import type { ComponentProps, Props } from './withFileUploader.types'

export function withFileUploader(Component: ComponentType<ComponentProps>) {
  return function FileUploaderHOC<T extends Props>({ setFile, ...inputAttributes }: T) {
    const [isDragOver, setIsDragOver] = useState(false)
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleOpenAlert = () => setIsAlertOpen(true)
    const handleCloseAlert = () => setIsAlertOpen(false)

    function triggerInputClick() {
      if (!inputRef.current) return

      inputRef.current.click()
    }

    function handleChange(ev: ChangeEvent<HTMLInputElement>) {
      const fileList = ev.target.files
      if (!fileList) return

      const file = fileList.item(0)
      if (!file) return

      if (!isValidFileSize(file)) {
        ev.target.value = ''
        return handleOpenAlert()
      }

      setFile(file)
      ev.target.value = ''
    }

    function handleDrop(ev: DragEvent<HTMLDivElement>) {
      ev.preventDefault()

      const fileList = ev.dataTransfer.files
      const firstFile = fileList.item(0)

      if (!firstFile) return

      if (!isValidFileSize(firstFile)) {
        setIsDragOver(false)
        return handleOpenAlert()
      }

      setFile(firstFile)
      setIsDragOver(false)
    }

    function handleDragOver(ev: DragEvent<HTMLDivElement>) {
      ev.preventDefault()

      setIsDragOver(true)
    }

    const handleDragLeave = () => setIsDragOver(false)

    return (
      <>
        <Component
          isDragOver={isDragOver}
          onClick={triggerInputClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <input
            {...inputAttributes}
            ref={inputRef}
            type='file'
            className='hidden'
            onChange={handleChange}
          />
        </Component>

        <FileSizeAlert isOpen={isAlertOpen} onClose={handleCloseAlert} />
      </>
    )
  }
}
