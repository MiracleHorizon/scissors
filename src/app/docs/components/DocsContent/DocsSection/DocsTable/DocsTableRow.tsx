import { Code, Table } from '@radix-ui/themes'
import type { ReactNode } from 'react'

export function DocsTableRow({ label, description, defaultValue }: Props) {
  return (
    <Table.Row>
      <Table.RowHeaderCell>{label}</Table.RowHeaderCell>
      <Table.Cell>{description}</Table.Cell>
      {typeof defaultValue !== 'object' ? (
        <Table.Cell>
          <Code
            size={{
              initial: '2',
              xs: '3'
            }}
          >
            {defaultValue}
          </Code>
        </Table.Cell>
      ) : (
        defaultValue
      )}
    </Table.Row>
  )
}

interface Props {
  label: string
  description: ReactNode
  defaultValue: string | number | ReactNode
}
