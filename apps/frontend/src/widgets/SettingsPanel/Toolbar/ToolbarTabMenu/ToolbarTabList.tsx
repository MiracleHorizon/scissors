import { Tabs } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { FC } from 'react'

import { ToolbarTabItem } from './ToolbarTabItem'
import { SymbolIcon } from '@ui/icons/SymbolIcon'
import { DimensionsIcon } from '@ui/icons/DimensionsIcon'
import { TOUR_STEP } from '@lib/tour'
import { TOOLBAR_TAB } from '@stores/tabs'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import type { Tab } from './types'
import styles from './ToolbarTabList.module.css'

const tabs: Tab[] = [
  {
    label: 'Convert',
    value: TOOLBAR_TAB.CONVERT,
    icon: <SymbolIcon />
  },
  {
    label: 'Resize',
    value: TOOLBAR_TAB.RESIZE,
    icon: <DimensionsIcon width='16px' height='16px' />
  }
  // {
  //   label: 'Metadata',
  //   value: TAB_METADATA,
  //   icon: <MetadataIcon width='17px' height='17px' />
  // }
] as const

export const ToolbarTabList: FC<Props> = ({ className, onClick }) => (
  <Tabs.List data-tourstep={TOUR_STEP.TOOLBAR_TAB_LIST} className={clsx(styles.root, className)}>
    {tabs.map(props => (
      <ToolbarTabItem key={props.value} {...props} onClick={onClick} />
    ))}
  </Tabs.List>
)

interface Props extends ClassNameProps {
  onClick?: VoidFunction
}
