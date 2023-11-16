import { Flex, Switch, Text } from '@radix-ui/themes'

import { themeColor } from '@shared/theme'

export function OptionSwitch({ title, ...switchProps }: Props) {
  return (
    <Text as='label' size='3'>
      <Flex gap='2'>
        <Switch radius='none' size='3' color={themeColor} {...switchProps} /> {title}
      </Flex>
    </Text>
  )
}

interface Props {
  title: string
  onClick: VoidFunction
  checked?: boolean
  disabled?: boolean
}
