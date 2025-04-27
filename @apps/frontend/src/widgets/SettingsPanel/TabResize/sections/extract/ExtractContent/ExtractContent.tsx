import { useEffect, lazy, Suspense } from 'react'
import { Flex } from '@radix-ui/themes'

import { ExtractCallout } from './ExtractCallout'
import { ExtractRegionPreview } from './ExtractRegionPreview'
import { useOutputStore } from '@stores/output'
import { useExtractStore } from '@stores/extract'

const ExtractSectionDialog = lazy(() =>
  import('./ExtractSectionDialog').then(mod => ({ default: mod.ExtractSectionDialog }))
)

export const ExtractContent = () => {
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

      {file && (
        <Suspense fallback={null}>
          <ExtractSectionDialog file={file} />
        </Suspense>
      )}
    </Flex>
  )
}
