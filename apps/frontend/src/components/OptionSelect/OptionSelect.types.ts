import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react'
import type { Select } from '@radix-ui/themes'

import type { TextSize } from '@lib/theme'
import type { StyleProps } from '@app-types/StyleProps'
import type { ClassNameProps } from '@app-types/ClassNameProps'

/* eslint no-unused-vars: 0 */
export interface Props extends StylesProps, ComponentPropsWithoutRef<typeof Select.Root> {
  label: string
  data: Value[]
  valueCapitalize?: boolean
  DetailsComponent?: ReactNode
}

interface StylesProps extends ClassNameProps, StyleProps {
  triggerClassName?: string
  triggerStyle?: CSSProperties
  labelSize?: TextSize
  labelClassName?: string
  labelStyle?: CSSProperties
  contentClassName?: string
  contentStyle?: CSSProperties
}

interface Value {
  value: string[]
  label?: string
}

export type OptionSelectData = Props['data']
