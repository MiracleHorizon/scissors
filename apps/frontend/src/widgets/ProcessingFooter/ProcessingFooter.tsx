import dynamic from 'next/dynamic'
import { Box } from '@radix-ui/themes'

import { ProcessingFooterContentSkeleton } from './ProcessingFooterContentSkeleton'
import styles from './ProcessingFooter.module.css'

const ProcessingFooterContent = dynamic(() => import('./ProcessingFooterContent'), {
  ssr: false,
  loading: () => <ProcessingFooterContentSkeleton />
})

export const ProcessingFooter = () => (
  <Box asChild height='var(--processing-footer-height)' width='100%' px='4' className={styles.root}>
    <footer>
      <ProcessingFooterContent />
    </footer>
  </Box>
)
