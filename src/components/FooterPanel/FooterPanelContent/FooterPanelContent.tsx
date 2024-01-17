import { Flex, Separator } from '@radix-ui/themes'
import type { FC } from 'react'

import { ButtonConvert } from './ButtonConvert'
import { ButtonDownload } from './ButtonDownload'
import styles from './FooterPanelContent.module.css'

export const FooterPanelContent: FC<Props> = props => (
  <Flex align='center' justify='end' gap='3' height='100%' width='100%' className={styles.root}>
    <ButtonDownload />
    <Separator orientation='vertical' size='2' />
    <ButtonConvert {...props} />
  </Flex>
)

interface Props {
  isPending: boolean
  trigger: VoidFunction
}
