import { Flex, Skeleton } from '@radix-ui/themes'

import { LoadingSpinner } from '@ui/LoadingSpinner'
import type { Size } from '@lib/theme'

const spinnerSize: Size = {
  initial: '7',
  sm: '8'
}

export const UploadedFileLoading = () => (
  <Flex direction='column' gap='3' width='100%'>
    <Skeleton height='92px' width='100%' />
    <Flex align='center' justify='center' width='100%'>
      <LoadingSpinner mt='9' width={spinnerSize} height={spinnerSize} />
    </Flex>
  </Flex>
)
