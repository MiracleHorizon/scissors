import MediaQuery from 'react-responsive'
import { Tabs } from '@radix-ui/themes'
import type { FC } from 'react'

import { BREAKPOINTS_MAX_WIDTH } from '@lib/theme'
import type { Tab } from '../types'

interface Props extends Tab {
  onClick?: VoidFunction
}

export const ToolbarTabItem: FC<Props> = ({ value, label, icon, onClick }) => (
  <Tabs.Trigger key={value} value={value} onClick={onClick}>
    <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.xs}>{icon}</MediaQuery>

    {label}
  </Tabs.Trigger>
)
