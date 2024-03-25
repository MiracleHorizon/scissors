import dynamic from 'next/dynamic'
import { Box } from '@radix-ui/themes'

import { AppFooterContentSkeleton } from './AppFooterContentSkeleton'
import styles from './AppFooter.module.css'

const AppFooterContent = dynamic(() => import('./AppFooterContent'), {
  ssr: false,
  loading: () => <AppFooterContentSkeleton />
})

export const AppFooter = () => (
  <Box asChild height='var(--app-footer-height)' width='100%' px='4' className={styles.root}>
    <footer>
      <AppFooterContent />
    </footer>
  </Box>
)
