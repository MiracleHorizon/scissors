import { Grid } from '@radix-ui/themes'
import type { Responsive } from '@radix-ui/themes/props'

import { SelectExtendWith } from './SelectExtendWith'

const columns: Responsive<string> = {
  initial: '1',
  xs: '2'
} as const

export const ExtendWith = () => (
  <Grid columns={columns} gap='2' width='100%'>
    <SelectExtendWith />
  </Grid>
)
