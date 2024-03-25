'use client'

import { Text } from '@radix-ui/themes'
import type { CSSProperties, FC } from 'react'

import { FileValidationAlert, type FileValidationAlertExternalProps } from './FileValidationAlert'
import { MAX_FILE_SIZE_MB } from '@site/config'

const maxFileSizeTextStyle: CSSProperties = {
  fontWeight: '600'
} as const

export const FileSizeAlert: FC<FileValidationAlertExternalProps> = props => (
  <FileValidationAlert
    {...props}
    title='Invalid file size'
    description={
      <>
        The selected file is too large. The maximum file size is{' '}
        <Text style={maxFileSizeTextStyle}>{MAX_FILE_SIZE_MB}</Text> mb.
      </>
    }
  />
)
