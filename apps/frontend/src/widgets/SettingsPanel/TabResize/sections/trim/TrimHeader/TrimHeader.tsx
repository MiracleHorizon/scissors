import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ScissorsIcon } from '@ui/icons/ScissorsIcon'
import { ButtonTrimReset } from './ButtonTrimReset'
import { DOCS_ANCHOR_TRIM, PATH_DOCS } from '@site/paths'

export const TrimHeader = () => (
  <OptionSectionHeader
    title='Trim'
    href={PATH_DOCS + DOCS_ANCHOR_TRIM}
    icon={<ScissorsIcon width='18px' height='18px' label='trim' />}
  >
    <ButtonTrimReset />
  </OptionSectionHeader>
)
