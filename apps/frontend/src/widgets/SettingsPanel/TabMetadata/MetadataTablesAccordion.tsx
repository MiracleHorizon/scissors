import { Text } from '@radix-ui/themes'
import type { FC } from 'react'

import * as Accordion from '@ui/Accordion'
import { MetadataTable } from './MetadataTable'
import type { ExifrReturn } from './types'

export const MetadataTablesAccordion: FC<Props> = ({ metadata }) => (
  <Accordion.Root className='hidden-' type='multiple' defaultValue={Object.keys(metadata)}>
    {Object.entries(metadata).map(([name, data]) => (
      <Accordion.Item key={name} value={name} defaultChecked>
        <Accordion.Header>
          <Accordion.Trigger>
            <Text size='3' weight='medium'>
              {name.toUpperCase()}
            </Text>

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

interface Props {
  metadata: ExifrReturn
}
