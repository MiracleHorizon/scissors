import { Flex, Tabs } from '@radix-ui/themes'

import { TokensIcon } from '@scissors/react-icons/TokensIcon'
import { RotateCounterClockwiseIcon } from '@scissors/react-icons/RotateCounterClockwiseIcon'
import { PaintbrushIcon } from '@scissors/react-icons/PaintbrushIcon'
import { SettingsIcon } from '@scissors/react-icons/SettingsIcon'

import { CommonOptions } from '@/widgets/convert/CommonOptions'
import { ModulationOptions } from '@/widgets/convert/ModulationOptions'
import { ColorizationOptions } from '@/widgets/convert/ColorizationOptions'
import { RotationOptions } from '@/widgets/convert/RotationOptions'
import { AdvancedOptions } from '@/widgets/convert/AdvancedOptions'

import { OptionSection } from '../OptionSection/OptionSection'

export const SettingsConvertPage = () => (
  <Tabs.Content value='convert'>
    <Flex width='100%' direction='column' gap='2'>
      <OptionSection content={<CommonOptions />} />
      <OptionSection
        title='Modulation'
        docsLink='/docs#modulation'
        icon={<TokensIcon width='20' height='20' label='modulation' />}
        content={<ModulationOptions />}
      />
      <OptionSection
        title='Colorization'
        icon={<PaintbrushIcon width='20' height='20' label='colorize' />}
        content={<ColorizationOptions />}
      />
      <OptionSection
        title='Rotation'
        docsLink='/docs#rotate'
        icon={<RotateCounterClockwiseIcon width='20' height='20' label='rotation' />}
        content={<RotationOptions />}
      />
      <OptionSection
        title='Advanced'
        icon={<SettingsIcon width='18' height='18' label='advanced settings' />}
        content={<AdvancedOptions />}
      />
    </Flex>
  </Tabs.Content>
)
