import { Flex, Spinner } from '@radix-ui/themes'

import styles from './loading.module.css'

const Loading = () => (
  <Flex width='100%' height='var(--layout-content-height)' align='center' justify='center'>
    <Spinner className={styles.spinner} />
  </Flex>
)

export default Loading
