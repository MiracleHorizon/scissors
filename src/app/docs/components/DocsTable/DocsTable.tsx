import { Table } from '@radix-ui/themes'

import { DocsTableHeader } from './DocsTableHeader'
import { DocsTableRow } from './DocsTableRow'
import { RotateRow } from './rows'
import type { Row } from '@app/docs/types'

export function DocsTable({ rows }: Props) {
  return (
    <Table.Root size='3' variant='surface'>
      <DocsTableHeader />
      <Table.Body>
        {rows.map(row => (
          <DocsTableRow key={row.name} {...row} />
        ))}
        <RotateRow />
      </Table.Body>
    </Table.Root>
  )
}

interface Props {
  rows: Row[]
}
