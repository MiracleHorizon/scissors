import {
  type ChangeEvent,
  type DragEvent,
  useRef,
  useState,
  type PropsWithChildren,
  type HTMLAttributes
} from 'react'

import { isValidFileSize } from '@/shared/file'
import { showInvalidFileSizeToast } from '@/entities/toast'

// TODO: Shared? Ui?
export const FileUploader = ({
  children,
  setFile,
  accept,
  tooltipContent,
  className,
  wrapperHtmlAttributes,
  inputHtmlAttributes,
  onUpload
}: PropsWithChildren<{
  accept: string
  // eslint-disable-next-line no-unused-vars
  setFile: (file: File | null) => void
  tooltipContent?: string
  className?: string
  wrapperHtmlAttributes?: Omit<
    HTMLAttributes<HTMLDivElement>,
    'onClick' | 'onDrop' | 'onDragOver' | 'onDragLeave'
  >
  inputHtmlAttributes?: Omit<
    HTMLAttributes<HTMLInputElement>,
    'type' | 'className' | 'onChange' | 'ref' | 'accept'
  >
  onUpload?: VoidFunction
}>) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

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
      showInvalidFileSizeToast()
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
    }

    handleStopDrag()
  }

  const handleDragOver = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault()
    handleStartDrag()
  }

  return (
    <div
      {...wrapperHtmlAttributes}
      className={className}
      data-drag-over={isDragOver}
      onClick={triggerInputClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleStopDrag}
      title={tooltipContent}
    >
      {children}

      <input
        {...inputHtmlAttributes}
        ref={inputRef}
        type='file'
        className='hidden'
        accept={accept}
        data-cy='file-upload-input'
        onChange={handleChange}
      />
    </div>
  )
}
