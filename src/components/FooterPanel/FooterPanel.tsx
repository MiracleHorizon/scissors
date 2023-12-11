import dynamic from 'next/dynamic'
import { Box } from '@radix-ui/themes'

import { FooterPanelContentSkeleton } from './FooterPanelContentSkeleton'
import { useConvertImage } from '@hooks/useConvertImage'
import styles from './FooterPanel.module.css'

const FooterPanelContent = dynamic(
  () => import('./FooterPanelContent').then(mod => mod.FooterPanelContent),
  {
    ssr: false,
    loading: () => <FooterPanelContentSkeleton />
  }
)

export function FooterPanel(props: Props) {
  return (
    <Box asChild px='4' width='100%' height='9' className={styles.root}>
      <footer>
        <FooterPanelContent {...props} />
      </footer>
    </Box>
  )
}

type Props = Pick<ReturnType<typeof useConvertImage>, 'isPending' | 'handleConvertImage'>
