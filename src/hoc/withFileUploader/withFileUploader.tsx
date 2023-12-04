import { type ChangeEvent, type ComponentType, type DragEvent, useRef, useState } from 'react'

import type { ComponentProps, Props } from './withFileUploader.types'

export function withFileUploader(Component: ComponentType<ComponentProps>) {
  return function FileUploaderHOC<T extends Props>({ setFile, ...inputAttributes }: T) {
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
    )
  }
}
