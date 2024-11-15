import { FileValidationAlert, type FileValidationAlertExternalProps } from './FileValidationAlert'

export const FileTypeAlert = (props: FileValidationAlertExternalProps) => (
  <FileValidationAlert
    {...props}
    title='Invalid file type'
    description='The selected file type is not supported'
  />
)
