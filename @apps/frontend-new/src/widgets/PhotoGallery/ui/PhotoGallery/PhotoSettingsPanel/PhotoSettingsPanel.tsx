import { Badge, Card, Flex, Heading, Text } from '@radix-ui/themes'

import type { ConvertSettings } from '@scissors/sharp'

export const PhotoSettingsPanel = ({ settings }: { settings: Partial<ConvertSettings> }) => (
  <Card size='2'>
    <Flex direction='column'>
      <Heading as='h5' size='2' weight='medium'>
        Processing Details
      </Heading>

      <Flex direction='column' mt='3' gap='1'>
        {Object.entries(settings).map(([key, value]) => {
          const valueJSX = (() => {
            if (typeof value === 'number') {
              return <Text>{String(value)}</Text>
            }

            if (typeof value === 'boolean') {
              return (
                <Badge radius='large' color={value ? 'green' : 'gray'}>
                  {value ? 'enabled' : 'disabled'}
                </Badge>
              )
            }

            if (typeof value === 'object') {
              return (
                <Text>
                  <code>{JSON.stringify(value, null, 2)}</code>
                </Text>
              )
            }

            return <Text>{String(value)}</Text>
          })()

          return (
            <Flex key={key} justify='between'>
              <Text size='2'>{key}</Text>
              {valueJSX}
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  </Card>
)
