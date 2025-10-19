import { Grid } from '@radix-ui/themes'

import { ConvertButton } from '@/features/settings/convert'
import styles from './SettingsPanelFooter.module.css'

export const SettingsPanelFooter = () => (
  <Grid asChild mt='auto' p='3' className={styles.footer}>
    <footer>
      <ConvertButton />
    </footer>
  </Grid>
)
