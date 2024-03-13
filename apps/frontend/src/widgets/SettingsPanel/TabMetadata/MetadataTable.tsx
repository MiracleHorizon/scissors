import { useMemo } from 'react'
import { Table } from '@radix-ui/themes'
import dayjs from 'dayjs'

import type { ExifrData } from './types'
import styles from './MetadataTable.module.css'

export function MetadataTable({ data }: Props) {
  const items = useMemo(() => {
    const entries = Object.entries(data)
    const filteredEntries = entries.filter(([_, value]) => {
      if (value === undefined || value === null) {
        return false
      } else if (typeof value === 'string' && value.toLowerCase() === 'unknown') {
        return false
      }

      return true
    })

    return filteredEntries
  }, [data])

  function formatDate(date: string | Date) {
    const template = 'D MMM YYYY hh:mmA'
    return dayjs(date).format(template)
  }

  function formatValue(value: any) {
    if (value instanceof Date) {
      return formatDate(value)
    }

    return value.toString()
  }

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
        {items.map(([key, value]) => (
          <Table.Row key={key}>
            <Table.RowHeaderCell title={key} className={styles.rowHeaderCell}>
              {key}
            </Table.RowHeaderCell>
            <Table.Cell>{formatValue(value)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

interface Props {
  label: string
  data: ExifrData
}
