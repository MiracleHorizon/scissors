import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ExtractCallout } from './ExtractCallout'
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

      {previewFile && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          width={200}
          height={200 / previewAspectRatio}
          src={URL.createObjectURL(previewFile)}
          alt='extracted image preview'
        />
      )}

      {file && <ExtractSectionDialog file={file} />}
    </Flex>
  )
}
