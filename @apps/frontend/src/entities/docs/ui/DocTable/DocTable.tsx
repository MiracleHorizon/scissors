import { Table, Text } from '@radix-ui/themes'
import { isValidElement, type ReactNode } from 'react'

export const DocTable = ({ content }: { content: NonNullable<ReactNode> }) => (
  <Table.Root variant='surface'>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Option</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell width='15%' minWidth='140px'>
          Default
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {isValidElement(content) ? (
        content
      ) : (
        <Text color='gray' size='4' align='center'>
          Failed to display content
        </Text>
      )}
    </Table.Body>
  </Table.Root>
)
