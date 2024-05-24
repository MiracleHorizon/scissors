import { Flex } from '@radix-ui/themes'

import { Checkbox } from '@design-system/Checkbox'
import { useMetadataStore } from '@stores/metadata'

export function MetadataCheckboxGroup({ hasExif, hasICC }: Props) {
  const keepMetadata = useMetadataStore(state => state.keepMetadata)
  const keepExif = useMetadataStore(state => state.keepExif)
  const keepICCProfile = useMetadataStore(state => state.keepICCProfile)

  const toggleKeepMetadata = useMetadataStore(state => state.toggleKeepMetadata)
  const toggleKeepExif = useMetadataStore(state => state.toggleKeepExif)
  const toggleKeepICCProfile = useMetadataStore(state => state.toggleKeepICCProfile)

  const handleToggleKeepMetadata = () => toggleKeepMetadata()
  const handleToggleKeepExif = () => toggleKeepExif()
  const handleToggleKeepICCProfile = () => toggleKeepICCProfile()

  return (
    <Flex direction='column' gap='2'>
      <Checkbox label='Keep Metadata' checked={keepMetadata} onClick={handleToggleKeepMetadata} />
      {hasExif && <Checkbox label='Keep Exif' checked={keepExif} onClick={handleToggleKeepExif} />}
      {hasICC && (
        <Checkbox
          label='Keep ICC Profile'
          checked={keepICCProfile}
          onClick={handleToggleKeepICCProfile}
        />
      )}
    </Flex>
  )
}

interface Props {
  hasExif: boolean
  hasICC: boolean
}
