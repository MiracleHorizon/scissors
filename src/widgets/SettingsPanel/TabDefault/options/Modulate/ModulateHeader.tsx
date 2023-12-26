import { TokensIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonRemoveModulate } from './ButtonRemoveModulate'
import { ButtonResetModulate } from './ButtonResetModulate'
import { DocsHash, Route } from '@lib/router'

export function ModulateHeader() {
  return (
    <OptionSectionHeader
      mb='2'
      title='Modulate'
      href={Route.DOCS + DocsHash.MODULATE}
      icon={<TokensIcon width='18px' height='18px' />}
    >
      <>
        <ButtonResetModulate />
        <ButtonRemoveModulate />
      </>
    </OptionSectionHeader>
  )
}
