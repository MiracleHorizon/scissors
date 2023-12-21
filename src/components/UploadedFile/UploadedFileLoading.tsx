import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import { LoadingSpinner } from '@ui/LoadingSpinner'
import type { Size } from '@libs/radix'

const spinnerSize: Size = {
  initial: '7',
  sm: '8'
}

export function UploadedFileLoading() {
  return (
    <Flex direction='column' gap='3' width='100%'>
      <Skeleton height={64} width='100%' />
      <Flex align='center' justify='center' width='100%'>
        <LoadingSpinner mt='9' width={spinnerSize} height={spinnerSize} />
      </Flex>
    </Flex>
  )
}
