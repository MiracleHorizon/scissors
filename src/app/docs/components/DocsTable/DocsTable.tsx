import { Table } from '@radix-ui/themes'

import { DocsTableHeader } from './DocsTableHeader'
import {
  BlurRow,
  FlipRow,
  FlopRow,
  NegateAlphaRow,
  NegateRow,
  NormaliseRow,
  RotateAngleRow,
  RotateBackgroundRow
} from './rows'

export function DocsTable() {
  return (
    <Table.Root size='3' variant='surface'>
      <DocsTableHeader />
      <Table.Body>
        <FlipRow />
        <FlopRow />
        <NegateRow />
        <NegateAlphaRow />
        <BlurRow />
        <RotateAngleRow />
        <RotateBackgroundRow />
        <NormaliseRow />
      </Table.Body>
    </Table.Root>
  )
}
