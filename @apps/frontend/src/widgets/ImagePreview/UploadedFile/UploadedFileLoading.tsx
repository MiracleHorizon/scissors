import { Flex, Skeleton, Spinner } from '@radix-ui/themes'

export const UploadedFileLoading = () => (
  <Flex direction='column' gap='3' width='100%'>
    <Skeleton height='92px' width='100%' />
    <Flex align='center' justify='center' width='100%'>
      <Spinner size='3' mt='9' />
    </Flex>
  </Flex>
)
