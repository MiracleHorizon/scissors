import { Flex } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import { DocsSectionHeader } from './DocsSectionHeader'
import { DocsTable } from './DocsTable'

export function DocsSection({ children, ...headerProps }: Props) {
  return (
    <Flex direction='column' gap='4' width='100%'>
      <DocsSectionHeader {...headerProps} />
      <DocsTable>{children}</DocsTable>
    </Flex>
  )
}

type Props = PropsWithChildren<{
  title: string
  hash: string
}>
