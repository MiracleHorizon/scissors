import { Grid, type Responsive } from '@radix-ui/themes'

import { SwitchWithoutEnlargement } from './SwitchWithoutEnlargement'
import { SwitchWithoutReduction } from './SwitchWithoutReduction'
import { SwitchFastShrink } from './SwitchFastShrink'
import type { Gap } from '@lib/theme'
import styles from './ResizeSwitchers.module.css'

const columns: Responsive<string> = {
  initial: '1',
  xs: '2',
  md: '1'
}
const gapX: Gap = {
  initial: '2',
  xs: '3',
  md: '2'
}

export function ResizeSwitchers() {
  return (
    <Grid columns={columns} gapX={gapX} gapY='2' mt='2' width='100%' className={styles.root}>
      <SwitchWithoutEnlargement />
      <SwitchWithoutReduction />
      <SwitchFastShrink />
    </Grid>
  )
}
