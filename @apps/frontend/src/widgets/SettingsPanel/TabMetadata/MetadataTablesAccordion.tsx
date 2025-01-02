import { Text } from '@radix-ui/themes'

import * as Accordion from '@ui/Accordion'
import { MetadataTable } from './MetadataTable'
import type { ExifrReturn } from './types'

interface Props {
  metadata: ExifrReturn
}

export const MetadataTablesAccordion = ({ metadata }: Props) => (
  <Accordion.Root type='multiple' defaultValue={Object.keys(metadata)}>
    {Object.entries(metadata).map(([name, data]) => (
      <Accordion.Item key={name} value={name} defaultChecked>
        <Accordion.Header>
          <Accordion.Trigger>
            <Text weight='medium'>{name.toUpperCase()}</Text>

            <Accordion.Chevron />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content>
          <MetadataTable data={data} />
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
)
