import { Flex } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import { DocsSectionHeader } from './DocsSectionHeader'
import { DocsTable } from '../DocsTable'

export function DocsSection({ children, title }: Props) {
  return (
    <Flex direction='column' gap='4' width='100%'>
      <DocsSectionHeader title={title} />
      <DocsTable>{children}</DocsTable>
    </Flex>
  )
}

type Props = PropsWithChildren<{
  title: string
}>
