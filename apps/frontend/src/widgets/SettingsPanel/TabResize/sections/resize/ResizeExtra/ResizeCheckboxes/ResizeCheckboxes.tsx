import { Grid } from '@radix-ui/themes'
import type { MarginProps, Responsive } from '@radix-ui/themes/props'
import type { FC } from 'react'

import { CheckboxEnlargement } from './CheckboxEnlargement'
import { CheckboxReduction } from './CheckboxReduction'
import { CheckboxFastShrink } from './CheckboxFastShrink'
import type { Gap } from '@lib/theme'

const columns: Responsive<string> = {
  initial: '1',
  xs: '3',
  md: '1'
} as const
const gapX: Gap = {
  initial: '2',
  xs: '3',
  md: '2'
} as const

export const ResizeCheckboxes: FC<MarginProps> = props => (
  <Grid {...props} columns={columns} gapX={gapX} gapY='3' width='100%'>
    <CheckboxEnlargement />
    <CheckboxReduction />
    <CheckboxFastShrink />
  </Grid>
)
