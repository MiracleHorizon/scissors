import { TokensIcon } from '@scissors/react-icons/TokensIcon'

import { OptionSectionHeader } from '@widgets/settings-panel/option-section-header'
import { ButtonRemoveModulate } from './button-remove-modulate'
import { ButtonResetModulate } from './button-reset-modulate'
import { DOCS_ANCHOR_MODULATE, PATH_DOCS } from '@site/paths'

export const ModulateHeader = () => (
  <OptionSectionHeader
    mb='2'
    title='Modulation'
    href={PATH_DOCS + DOCS_ANCHOR_MODULATE}
    icon={<TokensIcon width='18px' height='18px' label='modulation' />}
  >
    <>
      <ButtonResetModulate />
      <ButtonRemoveModulate />
    </>
  </OptionSectionHeader>
)
