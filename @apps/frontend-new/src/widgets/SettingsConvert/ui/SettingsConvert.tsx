import { Flex, Tabs } from '@radix-ui/themes'

import { TokensIcon } from '@scissors/react-icons/TokensIcon'

import { Modulate } from '@/features/settings/convert'

import { OptionSection } from './OptionSection/OptionSection'

export const SettingsConvert = () => {
  return (
    <Tabs.Content value='convert'>
      <Flex width='100%' direction='column' gap='2'>
        <OptionSection
          mb='2'
          title='Modulation'
          docsLink='/docs#modulate'
          icon={<TokensIcon width='20' height='20' label='modulation' />}
          content={<Modulate />}
        />
      </Flex>
    </Tabs.Content>
  )
}
