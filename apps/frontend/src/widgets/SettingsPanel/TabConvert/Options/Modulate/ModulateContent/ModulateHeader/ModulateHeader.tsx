import { TokensIcon } from '@scissors/react-icons/TokensIcon'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonRemoveModulate } from './ButtonRemoveModulate'
import { ButtonResetModulate } from './ButtonResetModulate'
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
