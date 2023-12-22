'use client'

import { Box } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

import { LayoutHeader } from './LayoutHeader'
import type { ThemeProps } from '@lib/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false
    },
    mutations: {
      retry: false
    }
  }
})

export function Layout({ children, ...props }: Props) {
  return (
    <Box width='100%' pt='8'>
      <LayoutHeader {...props} />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Box>
  )
}

type Props = PropsWithChildren<ThemeProps>
