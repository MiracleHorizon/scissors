import { Toaster } from 'sonner'

import { Layout } from '@/shared/ui'
import { useTheme } from '@/entities/theme'

export const DefaultLayout = () => {
  const { theme } = useTheme()

  return (
    <>
      <Layout />
      <Toaster theme={theme} />
    </>
  )
}
