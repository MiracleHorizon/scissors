import dayjs from 'dayjs'
import capitalize from 'lodash.capitalize'

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

  if (label === 'FocalLengthIn35mmFormat') {
    return 'Focal Length In 35mm Format'
  }

  if (label.startsWith('GPS')) {
    const gpsLabel = label.split('GPS')[1]
    return `GPS ${splitStringByUppercase(gpsLabel).join(' ')}`
  }

  const splitLabel = splitStringByUppercase(label)
  if (splitLabel.length === 1) {
    return capitalize(splitLabel[0])
  }

  return splitLabel.join(' ')
}
