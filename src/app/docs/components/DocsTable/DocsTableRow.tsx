import { Table } from '@radix-ui/themes'

import type { Row } from '@app/docs/types'

export function DocsTableRow({ name, description, defaultValue }: Row) {
  return (
    <Table.Row key={name}>
      <Table.RowHeaderCell>{name}</Table.RowHeaderCell>
      <Table.Cell dangerouslySetInnerHTML={{ __html: description }} />
      <Table.Cell dangerouslySetInnerHTML={{ __html: defaultValue }} />
    </Table.Row>
  )
}
