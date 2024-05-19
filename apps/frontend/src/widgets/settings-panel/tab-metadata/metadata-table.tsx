import { useMemo } from 'react'
import { Table } from '@radix-ui/themes'

import { formatLabel, formatValue } from './utils'
import type { ExifrData, TableItemValue } from './types'

export function MetadataTable({ data }: Props) {
  const items: [string, string][] = useMemo(() => {
    const entries = Object.entries(data)
    const filteredEntries: [string, TableItemValue][] = entries.filter(([, value]) => {
      if (value === undefined || value === null) {
        return false
      } else if (value instanceof Uint8Array) {
        return false
      }

      return true
    })

    return filteredEntries.map(([label, value]) => [formatLabel(label), formatValue(value, label)])
  }, [data])

  return (
    <Table.Root size='2'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell width='100px'>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Value</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map(([label, value]) => (
          <Table.Row key={label}>
            <Table.RowHeaderCell title={label} width='200px' maxWidth='200px'>
              {label}
            </Table.RowHeaderCell>
            <Table.Cell maxWidth='300px'>{value}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

interface Props {
  data: ExifrData
}
