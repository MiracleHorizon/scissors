import { Callout } from '@radix-ui/themes'

import { InfoCircledIcon } from '@ui/icons/InfoCircledIcon'
import styles from './TabResizeCallout.module.css'

export const TabResizeCallout = () => (
  <Callout.Root size='1' color='gray' className={styles.root}>
    <Callout.Icon>
      <InfoCircledIcon width='18px' height='18px' />
    </Callout.Icon>
    <Callout.Text size='2'>
      You can move sections below to override the sequence in which they are executed by dragging
      them
    </Callout.Text>
  </Callout.Root>
)
