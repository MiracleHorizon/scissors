import { Flex } from '@radix-ui/themes'

import { ExtendHeader } from './extend-header'
import { ExtendDirectionForm } from './extend-direction-form'
import { ExtendExtra } from './extend-extra'
import { TabResizeSection } from '../../tab-resize-section'

export const ExtendSection = () => (
  <TabResizeSection>
    <Flex direction='column' gap='2' width='100%'>
      <ExtendHeader />
      <ExtendDirectionForm />
      <ExtendExtra />
    </Flex>
  </TabResizeSection>
)
