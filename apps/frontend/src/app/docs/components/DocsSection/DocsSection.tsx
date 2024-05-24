import { Flex } from '@radix-ui/themes'
import type { FC, PropsWithChildren } from 'react'

import { DocsSectionHeader } from './DocsSectionHeader'
import { DocsTable } from '../DocsTable'

type Props = PropsWithChildren<{
  title: string
  hash: string
}>

export const DocsSection: FC<Props> = ({ children, ...headerProps }) => (
  <Flex direction='column' gap='4' width='100%'>
    <DocsSectionHeader {...headerProps} />
    <DocsTable>{children}</DocsTable>
  </Flex>
)
