import dayjs from 'dayjs'
import capitalize from 'lodash.capitalize'

import { splitStringByUppercase } from '@helpers/splitStringByUppercase'
import type { TableItemValue } from './types'

export function formatDate(date: string | Date): string {
  const template = 'D MMM YYYY, hh:mmA'
  return dayjs(date).format(template)
}

export function formatValue(value: TableItemValue, label: string): string {
  if (value instanceof Date) {
    return formatDate(value)
  }

  if (Array.isArray(value)) {
    return value.join(' ')
  }

  if (label === 'ApertureValue') {
    return `ƒ/${Number(value).toFixed(1)}`
  }

  if (label === 'FocalLength') {
    return `${Number(value).toFixed(1)} mm`
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

  if (label === 'ISO') {
    return label
  }

  if (label === 'ApertureValue') {
    return 'Aperture'
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
