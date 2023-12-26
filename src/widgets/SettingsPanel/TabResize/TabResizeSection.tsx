import { Flex, type PaddingProps } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

const padding: PaddingProps = {
  px: '3',
  pb: '2',
  pt: '4'
}

export function TabResizeSection({ children }: PropsWithChildren) {
  return (
    <Flex {...padding} asChild align='start' direction='column' gap='2'>
      <section>{children}</section>
    </Flex>
  )
}
