import { Code, Table } from '@radix-ui/themes'
import type { FC, ReactNode } from 'react'

import { MinusIcon } from '@ui/icons/MinusIcon'

export const DocsTableRow: FC<Props> = ({ label, description, defaultValue }) => (
  <Table.Row>
    <Table.RowHeaderCell>
      <Code
        size={{
          initial: '2',
          xs: '3'
        }}
      >
        {label}
      </Code>
    </Table.RowHeaderCell>

    <Table.Cell>{description}</Table.Cell>

    {defaultValue === undefined ? (
      <Table.Cell>
        <MinusIcon color='gray' label='not setted' />
      </Table.Cell>
    ) : typeof defaultValue !== 'object' ? (
      <Table.Cell>
        <Code
          color='gray'
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

interface Props {
  label: string
  description: ReactNode
  defaultValue?: string | number | ReactNode
}
