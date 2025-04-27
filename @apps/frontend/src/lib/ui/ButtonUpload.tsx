import { IconButton } from '@radix-ui/themes'
import { UploadIcon } from '@scissors/react-icons/UploadIcon'

import { FileUploader, type FileUploaderProps } from '@components/FileUploader'

export const ButtonUpload = ({
  accept,
  setFile,
  onUpload,
  tooltipContent,
  className,
  wrapperHtmlAttributes,
  inputHtmlAttributes
}: Omit<FileUploaderProps, 'children'>) => {
  const buttonContent = (
    <IconButton size='2' color='gray' variant='outline' type='button' tabIndex={-1}>
      <UploadIcon width='20px' height='20px' />
    </IconButton>
  )

  return (
    <FileUploader
      accept={accept}
      setFile={setFile}
      onUpload={onUpload}
      tooltipContent={tooltipContent}
      className={className}
      wrapperHtmlAttributes={wrapperHtmlAttributes}
      inputHtmlAttributes={inputHtmlAttributes}
    >
      {buttonContent}
    </FileUploader>
  )
}
