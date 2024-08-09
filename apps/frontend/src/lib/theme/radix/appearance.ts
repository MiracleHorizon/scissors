import type { ThemeColorItem } from '../types'
import type { RadixThemeColor } from './types'

export const themeColorItems: ThemeColorItem[] = [
  { key: 'tomato', color: 'tomato' },
  { key: 'red', color: 'red' },
  { key: 'ruby', color: 'ruby' },
  { key: 'crimson', color: 'crimson' },
  { key: 'pink', color: 'pink' },
  { key: 'plum', color: 'plum' },
  { key: 'purple', color: 'purple' },
  { key: 'violet', color: 'violet' },
  { key: 'iris', color: 'iris' },
  { key: 'indigo', color: 'indigo' },
  { key: 'blue', color: 'blue' },
  { key: 'cyan', color: 'cyan' },
  { key: 'teal', color: 'teal' },
  { key: 'jade', color: 'jade' },
  { key: 'green', color: 'green' },
  { key: 'grass', color: 'grass' },
  { key: 'brown', color: 'brown' },
  { key: 'orange', color: 'orange' },
  { key: 'sky', color: 'sky' },
  { key: 'mint', color: 'mint' },
  { key: 'lime', color: 'lime' },
  { key: 'yellow', color: 'yellow' },
  { key: 'amber', color: 'amber' },
  { key: 'gold', color: 'gold' },
  { key: 'bronze', color: 'bronze' },
  { key: 'gray', color: 'gray' }
] as const

export const primaryColors: RadixThemeColor[] = [
  'indigo',
  'blue',
  'sky',
  'red',
  'tomato',
  'green',
  'yellow',
  'orange',
  'gray',
  'brown',
  'violet',
  'purple'
] as const
