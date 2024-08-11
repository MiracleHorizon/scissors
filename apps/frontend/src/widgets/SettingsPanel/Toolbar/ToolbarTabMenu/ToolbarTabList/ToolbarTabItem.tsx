import MediaQuery from 'react-responsive'
import { Tabs, Text } from '@radix-ui/themes'

import { BREAKPOINTS_MAX_WIDTH } from '@lib/theme'
import type { Tab } from '../types'

interface Props extends Tab {
  onClick?: VoidFunction
}

export const ToolbarTabItem = ({ label, icon, ...props }: Props) => (
  <Tabs.Trigger {...props} data-cy={`tab-trigger-${label.toLowerCase()}`}>
    <Text mr='auto'>{label}</Text>

    <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.xs}>{icon}</MediaQuery>
  </Tabs.Trigger>
)
