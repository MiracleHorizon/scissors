'use client'

import type { FC } from 'react'

import { FileValidationAlert, type FileValidationAlertExternalProps } from './FileValidationAlert'

export const FileTypeAlert: FC<FileValidationAlertExternalProps> = props => (
  <FileValidationAlert
    {...props}
    title='Invalid file type'
    description='The selected file type is not supported'
  />
)
