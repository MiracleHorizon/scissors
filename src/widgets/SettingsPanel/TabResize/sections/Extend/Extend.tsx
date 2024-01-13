import { Flex } from '@radix-ui/themes'

import { ExtendHeader } from './ExtendHeader'
import { ExtendDirectionForm } from './ExtendDirectionForm'
import { ExtendExtra } from './ExtendExtra'
import { TabResizeSection } from '@widgets/SettingsPanel/TabResize/TabResizeSection'

export const Extend = () => (
  <TabResizeSection>
    <Flex direction='column' gap='2' width='100%'>
      <ExtendHeader />
      <ExtendDirectionForm />
      <ExtendExtra />
    </Flex>
  </TabResizeSection>
)
