import { Grid, type Responsive } from '@radix-ui/themes'

import { SelectExtendWith } from './SelectExtendWith'

const columns: Responsive<string> = {
  initial: '1',
  xs: '2'
}

export const ExtendWith = () => (
  <Grid columns={columns} gap='2' width='100%'>
    <SelectExtendWith />
  </Grid>
)
