import { Table } from '@radix-ui/themes'

import { DocsTableHeader } from './DocsTableHeader'
import { DocsTableRow } from './DocsTableRow'
import type { Row } from '@app/docs/types'

export function DocsTable({ rows }: Props) {
  return (
    <Table.Root variant='surface'>
      <DocsTableHeader />
      <Table.Body>
        {rows.map(row => (
          <DocsTableRow key={row.name} {...row} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}

interface Props {
  rows: Row[]
}
