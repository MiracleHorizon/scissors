import { TokensIcon } from '@ui/icons/TokensIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonRemoveModulate } from './ButtonRemoveModulate'
import { ButtonResetModulate } from './ButtonResetModulate'
import { DOCS_HASH, ROUTE } from '@lib/router'

export const ModulateHeader = () => (
  <OptionSectionHeader
    mb='2'
    title='Modulate'
    href={ROUTE.DOCS + DOCS_HASH.MODULATE}
    icon={<TokensIcon width='18px' height='18px' label='modulation' />}
  >
    <>
      <ButtonResetModulate />
      <ButtonRemoveModulate />
    </>
  </OptionSectionHeader>
)
