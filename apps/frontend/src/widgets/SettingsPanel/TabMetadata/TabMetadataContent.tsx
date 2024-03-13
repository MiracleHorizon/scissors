import { useEffect, useState } from 'react'
import { Flex, Text } from '@radix-ui/themes'

import * as Accordion from '@ui/Accordion'
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
          icc: false,
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
    <Flex direction='column' px='2' pt='2' pb='4' gap='4' width='100%'>
      {!file && <p>No file</p>}
      {file && !metadata && isFileTypeAllowed && <p>No metadata</p>}
      {file && !isFileTypeAllowed && <p>File type not allowed</p>}

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
                <MetadataTable label={name} data={data} />
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      )}
    </Flex>
  )
}
