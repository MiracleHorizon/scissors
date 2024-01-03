import { Flex } from '@radix-ui/themes'

import { ExtendHeader } from './ExtendHeader'
import { ExtendDirectionForm } from './ExtendDirectionForm'
import { ExtendExtra } from './ExtendExtra'
import { TabResizeSection } from '../TabResizeSection'

export function Extend() {
  return (
    <TabResizeSection>
      <Flex direction='column' gap='2' width='100%'>
        <ExtendHeader />
        <ExtendDirectionForm />
        <ExtendExtra />
      </Flex>
    </TabResizeSection>
  )
}
