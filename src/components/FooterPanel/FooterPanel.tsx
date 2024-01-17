import dynamic from 'next/dynamic'
import { Box } from '@radix-ui/themes'
import type { FC } from 'react'

import { FooterPanelContentSkeleton } from './FooterPanelContentSkeleton'
import styles from './FooterPanel.module.css'

const FooterPanelContent = dynamic(
  () => import('./FooterPanelContent').then(mod => mod.FooterPanelContent),
  {
    ssr: false,
    loading: () => <FooterPanelContentSkeleton />
  }
)

export const FooterPanel: FC<Props> = props => (
  <Box asChild px='4' width='100%' height='9' className={styles.root}>
    <footer>
      <FooterPanelContent {...props} />
    </footer>
  </Box>
)

interface Props {
  isPending: boolean
  trigger: VoidFunction
}
