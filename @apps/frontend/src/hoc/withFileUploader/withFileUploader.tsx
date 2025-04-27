import { type ChangeEvent, type ComponentType, type DragEvent, useRef, useState } from 'react'

import { isValidFileSize } from '@helpers/file/isValidFileSize'
import type { ComponentProps, Props } from './withFileUploader.types'
import { FileSizeAlert } from '@components/alerts/FileSizeAlert'

export const withFileUploader = (Component: ComponentType<ComponentProps>) =>
  function FileUploaderHOC<T extends Props>({
    setFile,
    tooltipContent,
    htmlAttributes,
    onUpload,
    ...inputAttributes
  }: T) {
    const [isDragOver, setIsDragOver] = useState(false)
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleOpenAlert = () => setIsAlertOpen(true)
    const handleCloseAlert = () => setIsAlertOpen(false)

    const handleStartDrag = () => setIsDragOver(true)
    const handleStopDrag = () => setIsDragOver(false)

    const triggerInputClick = () => {
      if (!inputRef.current) return

      inputRef.current.click()
    }

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
      const fileList = ev.target.files
      if (!fileList) return

      const file = fileList.item(0)
      if (!file) return

      if (isValidFileSize(file.size)) {
        setFile(file)
        onUpload?.()
      } else {
        handleOpenAlert()
      }

      ev.target.value = ''
    }

    const handleDrop = (ev: DragEvent<HTMLDivElement>) => {
      ev.preventDefault()

      const fileList = ev.dataTransfer.files
      const firstFile = fileList.item(0)

      if (!firstFile) return

      if (isValidFileSize(firstFile.size)) {
        setFile(firstFile)
        onUpload?.()
      } else {
        handleOpenAlert()
      }

      handleStopDrag()
    }

    const handleDragOver = (ev: DragEvent<HTMLDivElement>) => {
      ev.preventDefault()

      handleStartDrag()
    }

    return (
      <>
        <Component
          {...htmlAttributes}
          tooltipcontent={tooltipContent}
          isDragOver={isDragOver}
          onClick={triggerInputClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleStopDrag}
        >
          <input
            {...inputAttributes}
            ref={inputRef}
            type='file'
            className='hidden'
            data-cy='file-upload-input'
            onChange={handleChange}
          />
        </Component>

        {isAlertOpen && <FileSizeAlert open={isAlertOpen} onClose={handleCloseAlert} />}
      </>
    )
  }
