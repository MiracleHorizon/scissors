import { Flex, type PaddingProps } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

const padding: PaddingProps = {
  pr: {
    initial: '0',
    sm: '3'
  },
  pb: '2'
}

export function TabResizeSection({ children }: PropsWithChildren) {
  return (
    <Flex
      {...padding}
      asChild
      align='start'
      direction='column'
      gap='2'
      width='100%'
      data-id='tab-resize-section'
    >
      <section>{children}</section>
    </Flex>
  )
}
