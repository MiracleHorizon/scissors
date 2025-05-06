import { string } from 'yup'

import { themeColors } from '@/shared/radix'

export const themeSchema = string().oneOf(['light', 'dark', 'system']).defined()

export const themeColorSchema = string()
  .oneOf(themeColors.map(item => item.color))
  .defined()
