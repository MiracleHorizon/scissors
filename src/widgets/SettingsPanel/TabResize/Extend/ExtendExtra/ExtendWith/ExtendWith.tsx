import { Grid, type Responsive } from '@radix-ui/themes'

import { SelectExtendWith } from './SelectExtendWith'

const columns: Responsive<string> = {
  initial: '1',
  xs: '2'
}

export function ExtendWith() {
  return (
    <Grid width='100%' columns={columns} gap='2'>
      <SelectExtendWith />
    </Grid>
  )
}
