import { TokensIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonRemoveModulate } from './ButtonRemoveModulate'

export function ModulateHeader() {
  return (
    <OptionSectionHeader mb='2' title='Modulate' icon={<TokensIcon width='18px' height='18px' />}>
      <ButtonRemoveModulate />
    </OptionSectionHeader>
  )
}
