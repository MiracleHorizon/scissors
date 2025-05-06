import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const RETRY_COUNT = 3

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: RETRY_COUNT,
      refetchOnWindowFocus: false
    }
  }
})

export const AppQuery = ({ children }: { children: NonNullable<ReactNode> }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
