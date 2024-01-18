import dynamic from 'next/dynamic'
import { Box } from '@radix-ui/themes'

import { AppFooterContentSkeleton } from './AppFooterContentSkeleton'
import styles from './AppFooter.module.css'

const FooterPanelContent = dynamic(() => import('./AppFooterContent/AppFooterContent'), {
  ssr: false,
  loading: () => <AppFooterContentSkeleton />
})

export const AppFooter = () => (
  <Box asChild px='4' width='100%' height='9' className={styles.root}>
    <footer>
      <FooterPanelContent />
    </footer>
  </Box>
)
