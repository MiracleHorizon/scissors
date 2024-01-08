import { Flex, type PaddingProps } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

const padding: PaddingProps = {
  pr: '3',
  pb: '2'
}

export function TabResizeSection({ children }: PropsWithChildren) {
  return (
    <Flex {...padding} asChild align='start' direction='column' gap='2' width='100%'>
      <section>{children}</section>
    </Flex>
  )
}
