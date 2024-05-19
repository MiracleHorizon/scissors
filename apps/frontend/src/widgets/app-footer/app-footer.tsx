import dynamic from 'next/dynamic'
import { Box } from '@radix-ui/themes'

import { AppFooterContentSkeleton } from './app-footer-content-skeleton'
import styles from './app-footer.module.css'

const AppFooterContent = dynamic(() => import('./app-footer-content'), {
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
