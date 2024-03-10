import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ExtractCallout } from './ExtractCallout'
import { ExtractRegionPreview } from './ExtractRegionPreview'
import { useOutputStore } from '@stores/output'
import { useExtractStore } from '@stores/extract'

const ExtractSectionDialog = dynamic(
  () => import('./ExtractSectionDialog').then(mod => mod.ExtractSectionDialog),
  {
    ssr: false
  }
)

export function ExtractContent() {
  const file = useOutputStore(state => state.file)
  const previewFile = useExtractStore(state => state.previewFile)
  const previewAspectRatio = useExtractStore(state => state.previewAspectRatio)

  return (
    <Flex direction='column' gap='2'>
      <ExtractCallout />

      {previewFile && <ExtractRegionPreview file={previewFile} aspectRatio={previewAspectRatio} />}

      {file && <ExtractSectionDialog file={file} />}
    </Flex>
  )
}
