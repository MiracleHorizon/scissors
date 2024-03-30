import { Skeleton } from '@radix-ui/themes'

export const ImageUploaderLoading = () => (
  <Skeleton
    m='auto'
    style={{
      borderRadius: '12px'
    }}
    height='130px'
    width='100%'
    maxWidth={{
      initial: '100%',
      xs: '80dvw',
      sm: '470px'
    }}
  />
)
