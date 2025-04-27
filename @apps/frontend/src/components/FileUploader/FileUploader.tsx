import {
  type ChangeEvent, // Ensure ChangeEvent is explicitly typed
  type DragEvent,
  useRef,
  useState,
  type PropsWithChildren,
  type HTMLAttributes
} from 'react'

import { isValidFileSize } from '@helpers/file/isValidFileSize'
import { FileSizeAlert } from '@components/alerts/FileSizeAlert'

// Define Props for the new FileUploader component
export interface FileUploaderProps extends PropsWithChildren {
  accept: string
  // eslint-disable-next-line no-unused-vars
  setFile: (file: File | null) => void // Reference the File type
  tooltipContent?: string
  className?: string // Allow passing className to the wrapper
  wrapperHtmlAttributes?: Omit<
    HTMLAttributes<HTMLDivElement>,
    'onClick' | 'onDrop' | 'onDragOver' | 'onDragLeave'
  > // Attributes for the wrapper div
  inputHtmlAttributes?: Omit<
    HTMLAttributes<HTMLInputElement>,
    'type' | 'className' | 'onChange' | 'ref' | 'accept'
  > // Attributes for the hidden input
  onUpload?: VoidFunction
}

// Rename HOC to a regular functional component
export const FileUploader = ({
  children,
  setFile,
  accept,
  tooltipContent,
  className,
  wrapperHtmlAttributes,
  inputHtmlAttributes,
  onUpload
}: FileUploaderProps) => {
  // State and refs remain largely the same
  const [isDragOver, setIsDragOver] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Handlers remain the same
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

  // Render a wrapper div instead of the passed Component
  return (
    <>
      <div
        {...wrapperHtmlAttributes}
        className={className} // Apply passed className
        // Apply internal state and handlers
        data-drag-over={isDragOver} // Use data-attribute for styling drag-over state
        onClick={triggerInputClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleStopDrag}
        // Consider how to handle tooltip - maybe a title attribute or leave it to consumer
        title={tooltipContent} // Simple example using title attribute
      >
        {/* Render children passed to the component */}
        {children}
        {/* Hidden input remains the same */}
        <input
          {...inputHtmlAttributes} // Spread additional input attributes
          ref={inputRef}
          type='file'
          className='hidden'
          accept={accept} // Pass accept prop to input
          data-cy='file-upload-input'
          onChange={handleChange}
        />
      </div>

      {/* Alert remains the same */}
      {isAlertOpen && <FileSizeAlert open={isAlertOpen} onClose={handleCloseAlert} />}
    </>
  )
}
