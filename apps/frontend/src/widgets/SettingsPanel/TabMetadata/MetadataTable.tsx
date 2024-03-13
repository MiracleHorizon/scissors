import { useMemo } from 'react'
import { Table } from '@radix-ui/themes'

import { formatLabel, formatValue } from './utils'
import type { ExifrData } from './types'
import styles from './MetadataTable.module.css'

export function MetadataTable({ data }: Props) {
  const items: [string, string][] = useMemo(() => {
    const entries = Object.entries(data)
    const filteredEntries = entries.filter(([, value]) => {
      if (value === undefined || value === null) {
        return false
      } else if (value instanceof Uint8Array) {
        return false
      }

      return true
    })

    return filteredEntries.map(([label, value]) => [formatLabel(label), formatValue(value)])
  }, [data])

  return (
    <Table.Root size='2'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell className={styles.nameColumnHeaderCell}>
            Name
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Value</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map(([label, value]) => (
          <Table.Row key={label}>
            <Table.RowHeaderCell title={label} className={styles.rowHeaderCell}>
              {label}
            </Table.RowHeaderCell>
            <Table.Cell>{value}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

interface Props {
  data: ExifrData
}
