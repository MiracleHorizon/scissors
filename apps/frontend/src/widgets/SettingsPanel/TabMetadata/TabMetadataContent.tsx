import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

import { Ifd0OptionsForm } from './ifd0-form'
import { Ifd2OptionsForm } from './ifd2-form'
import { CalloutDefault } from '@ui/CalloutDefault'
import { useOutputStore } from '@stores/output'
import { cropImageFileType } from '@helpers/file/cropImageFileType'
import { IMAGE_FILE_FORMAT } from '@server/sharp'
import type { ExifrReturn } from './types'

const allowedFileTypes: string[] = [
  IMAGE_FILE_FORMAT.JPEG,
  IMAGE_FILE_FORMAT.JPG,
  IMAGE_FILE_FORMAT.PNG
]

const MetadataTablesAccordion = dynamic(
  () => import('./MetadataTablesAccordion').then(mod => mod.MetadataTablesAccordion),
  {
    ssr: false
  }
)

export function TabMetadataContent() {
  const [parsedMetadata, setParsedMetadata] = useState<ExifrReturn | null>(null)
  const file = useOutputStore(state => state.file)
  const downloadPayload = useOutputStore(state => state.downloadPayload)
  const isFileTypeAllowed = file ? allowedFileTypes.includes(cropImageFileType(file.type)) : false

  useEffect(() => {
    if (!file) return

    import('exifr').then(({ default: exifr }) => {
      const data: File | Blob = downloadPayload ? downloadPayload.blob : file

      exifr
        .parse(data, {
          mergeOutput: false
        })
        .then(result => setParsedMetadata(result ?? null))
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)

          setParsedMetadata(null)
        })
    })
  }, [file, downloadPayload])

  useEffect(() => {
    if (!file && !downloadPayload && parsedMetadata) {
      setParsedMetadata(null)
    }
  }, [file, downloadPayload, parsedMetadata])

  return (
    <Flex direction='column' gap='4' px='3' pt='3' pb='4' width='100%'>
      {!file && <CalloutDefault text='To continue, please upload an image file' color='yellow' />}
      {file && !parsedMetadata && isFileTypeAllowed && (
        <CalloutDefault
          text='This image has no metadata, but you can add them below'
          color='gray'
        />
      )}
      {file && !isFileTypeAllowed && (
        <CalloutDefault
          text={`This file type is not supported. Allowed file types: ${allowedFileTypes.join(', ')}`}
          color='yellow'
        />
      )}

      <Ifd0OptionsForm />
      <Separator size='4' mt='2' />
      <Ifd2OptionsForm />

      {parsedMetadata && <MetadataTablesAccordion metadata={parsedMetadata} />}
    </Flex>
  )
}
