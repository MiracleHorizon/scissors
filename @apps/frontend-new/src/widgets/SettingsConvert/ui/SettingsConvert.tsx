import { Flex, Tabs } from '@radix-ui/themes'

import { TokensIcon } from '@scissors/react-icons/TokensIcon'
import { RotateCounterClockwiseIcon } from '@scissors/react-icons/RotateCounterClockwiseIcon'

import { Common, Modulate, Rotate } from '@/features/settings/convert'

import { OptionSection } from './OptionSection/OptionSection'

export const SettingsConvert = () => {
  // TODO: Angle
  const angle = 0

  return (
    <Tabs.Content value='convert'>
      <Flex width='100%' direction='column' gap='2'>
        <OptionSection content={<Common />} />
        <OptionSection
          title={`Rotation: ${angle}°`}
          docsLink='/docs#rotate'
          icon={<RotateCounterClockwiseIcon width='20' height='20' label='rotation' />}
          content={<Rotate />}
        />
        <OptionSection
          title='Modulation'
          docsLink='/docs#modulate'
          icon={<TokensIcon width='20' height='20' label='modulation' />}
          content={<Modulate />}
        />
      </Flex>
    </Tabs.Content>
  )
}
