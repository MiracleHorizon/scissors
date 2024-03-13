import dayjs from 'dayjs'

import { splitStringByUppercase } from '@helpers/splitStringByUppercase'
import type { TableItemValue } from './types'

export function formatDate(date: string | Date): string {
  const template = 'D MMM YYYY, hh:mmA'
  return dayjs(date).format(template)
}

export function formatValue(value: TableItemValue): string {
  if (value instanceof Date) {
    return formatDate(value)
  }

  if (Array.isArray(value)) {
    return value.join(' ')
  }

  return value.toString()
}

export function formatLabel(label: string): string {
  if (label === 'YCbCrPositioning') {
    return 'YCbCr Positioning'
  }

  const splitLabel = splitStringByUppercase(label)

  return splitLabel.join(' ')
}
