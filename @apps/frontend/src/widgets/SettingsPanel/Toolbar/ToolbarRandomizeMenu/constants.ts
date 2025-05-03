import type { Setting } from './types'

export const MAX_OPERATIONS = 6

export const defaultSettings: Setting[] = [
  {
    label: 'flip',
    checked: true
  },
  {
    label: 'flop',
    checked: false
  },
  {
    label: 'grayscale',
    checked: false
  },
  {
    label: 'negate',
    checked: false
  },
  {
    label: 'blur',
    checked: true
  },
  {
    label: 'rotate',
    checked: true
  },
  {
    label: 'modulate',
    checked: false
  },
  {
    label: 'gamma',
    checked: true
  },
  {
    label: 'tint',
    checked: false
  },
  {
    label: 'normalize',
    checked: false
  }
] as const
