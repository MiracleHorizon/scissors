import MediaQuery from 'react-responsive'
import { Tabs } from '@radix-ui/themes'

import { BREAKPOINTS_MAX_WIDTH } from '@lib/theme'
import type { Tab } from '../types'

interface Props extends Tab {
  onClick?: VoidFunction
}

export const ToolbarTabItem = ({ value, label, icon, onClick }: Props) => (
  <Tabs.Trigger key={value} value={value} onClick={onClick}>
    <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.xs}>{icon}</MediaQuery>

    {label}
  </Tabs.Trigger>
)
