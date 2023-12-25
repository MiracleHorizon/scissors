import { Flex } from '@radix-ui/themes'

import { LoadingSpinner } from '@ui/LoadingSpinner'
import styles from './loading.module.css'

export default function Loading() {
  return (
    <Flex width='100%' align='center' justify='center' className={styles.root}>
      <LoadingSpinner width='8' height='8' />
    </Flex>
  )
}
