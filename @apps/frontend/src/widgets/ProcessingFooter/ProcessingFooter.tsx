import { lazy, Suspense } from 'react'
import { Box } from '@radix-ui/themes'

import { ProcessingFooterContentSkeleton } from './ProcessingFooterContentSkeleton'
import styles from './ProcessingFooter.module.css'

const ProcessingFooterContent = lazy(() =>
  import('./ProcessingFooterContent').then(mod => ({ default: mod.default }))
)

export const ProcessingFooter = () => (
  <Box asChild width='100%' px='4' className={styles.root}>
    <footer>
      <Suspense fallback={<ProcessingFooterContentSkeleton />}>
        <ProcessingFooterContent />
      </Suspense>
    </footer>
  </Box>
)
