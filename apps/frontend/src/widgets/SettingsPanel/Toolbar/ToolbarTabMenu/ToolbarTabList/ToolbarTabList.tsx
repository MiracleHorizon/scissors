import { Tabs } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { SymbolIcon } from '@scissors/react-icons/SymbolIcon'
import { DimensionsIcon } from '@scissors/react-icons/DimensionsIcon'

import { ToolbarTabItem } from './ToolbarTabItem'
import { TOUR_STEP } from '@lib/tour'
import { TOOLBAR_TAB } from '@stores/tabs'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import type { Tab } from '../types'
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
  //   value: TOOLBAR_TAB.METADATA,
  //   icon: <MetadataIcon width='17px' height='17px' />
  // }
] as const

interface Props extends ClassNameProps {
  onClick?: VoidFunction
}

export const ToolbarTabList = ({ className, onClick }: Props) => (
  <Tabs.List data-tourstep={TOUR_STEP.TOOLBAR_TAB_LIST} className={clsx(styles.root, className)}>
    {tabs.map(props => (
      <ToolbarTabItem key={props.value} {...props} onClick={onClick} />
    ))}
  </Tabs.List>
)
