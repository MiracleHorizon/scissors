import { useEffect, useState } from 'react'
import { Flex, Text } from '@radix-ui/themes'

import * as Accordion from '@ui/Accordion'
import { CalloutDefault } from '@ui/CalloutDefault'
import { MetadataTable } from './MetadataTable'
import { useOutputStore } from '@stores/output'
import { cropImageFileType } from '@helpers/file/cropImageFileType'
import { IMAGE_FILE_FORMAT } from '@server/sharp'
import type { ExifrReturn } from './types'

const allowedFileTypes: string[] = [
  IMAGE_FILE_FORMAT.JPEG,
  IMAGE_FILE_FORMAT.JPG,
  IMAGE_FILE_FORMAT.PNG
]

export function TabMetadataContent() {
  const [metadata, setMetadata] = useState<ExifrReturn | null>(null)
  const file = useOutputStore(state => state.file)
  const isFileTypeAllowed = file ? allowedFileTypes.includes(cropImageFileType(file.type)) : false

  useEffect(() => {
    if (!file) return

    import('exifr').then(mod => {
      const exifr = mod.default

      exifr
        .parse(file, {
          mergeOutput: false
        })
        .then(result => setMetadata(result ?? null))
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)

          setMetadata(null)
        })
    })
  }, [file])

  return (
    <Flex direction='column' px='2' pt='3' pb='4' gap='4' width='100%'>
      {!file && <CalloutDefault text='To continue, please upload an image file' color='yellow' />}
      {file && !metadata && isFileTypeAllowed && (
        <CalloutDefault
          text='This image has no metadata, but you can add them below'
          color='gray'
        />
      )}
      {file && !isFileTypeAllowed && (
        <CalloutDefault
          text={`This file type is not supported. Allowed file types: ${allowedFileTypes.join(', ')}`}
          color='gray'
        />
      )}

      {metadata && (
        <Accordion.Root type='multiple' defaultValue={Object.keys(metadata)}>
          {Object.entries(metadata).map(([name, data]) => (
            <Accordion.Item key={name} value={name} defaultChecked>
              <Accordion.Header>
                <Accordion.Trigger>
                  <Text size='3' weight='medium'>
                    {name.toUpperCase()}
                  </Text>

                  <Accordion.Chevron />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content>
                <MetadataTable data={data} />
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      )}
    </Flex>
  )
}
