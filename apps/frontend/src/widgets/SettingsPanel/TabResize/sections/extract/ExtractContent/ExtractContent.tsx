import dynamic from 'next/dynamic'
import { useEffect } from 'react'
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
  const file = useOutputStore(state => state.getFileForProcessing())
  const previewFile = useExtractStore(state => state.previewFile)
  const previewAspectRatio = useExtractStore(state => state.previewAspectRatio)
  const setPreviewFile = useExtractStore(state => state.setPreviewFile)

  useEffect(() => {
    setPreviewFile(null)
  }, [file, setPreviewFile])

  return (
    <Flex direction='column' gap='2'>
      <ExtractCallout />

      {previewFile && <ExtractRegionPreview file={previewFile} aspectRatio={previewAspectRatio} />}

      {file && <ExtractSectionDialog file={file} />}
    </Flex>
  )
}
