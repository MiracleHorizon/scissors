'use client'

import { Text } from '@radix-ui/themes'
import type { CSSProperties, FC } from 'react'

import { AlertFileInvalid, type FileValidationAlertExternalProps } from './alert-file-invalid'
import { MAX_FILE_SIZE_MB } from '@site/config'

const maxFileSizeTextStyle: CSSProperties = {
  fontWeight: '600'
} as const

export const AlertFileSize: FC<FileValidationAlertExternalProps> = props => (
  <AlertFileInvalid
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
