import { string } from 'yup'

import { themeColorItems } from '@/shared/radix'

export const themeSchema = string().oneOf(['light', 'dark', 'system']).defined()

export const themeColorSchema = string()
  .oneOf(themeColorItems.map(item => item.color))
  .defined()
