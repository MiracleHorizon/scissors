'use client'

import type { FC } from 'react'

import { AlertFileInvalid, type FileValidationAlertExternalProps } from './alert-file-invalid'

export const AlertFileType: FC<FileValidationAlertExternalProps> = props => (
  <AlertFileInvalid
    {...props}
    title='Invalid file type'
    description='The selected file type is not supported'
  />
)
