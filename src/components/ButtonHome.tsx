'use client'

import { useRouter } from 'next/navigation'
import { Button, type MarginProps } from '@radix-ui/themes'

import { ROUTE } from '@lib/router'
import type { ButtonProps } from '@lib/theme'

export function ButtonHome({ radius = 'large', ...props }: ButtonProps & MarginProps) {
  const router = useRouter()

  const navigateToHome = () => router.replace(ROUTE.HOME)

  return (
    <Button {...props} radius={radius} onClick={navigateToHome}>
      Go to Homepage
    </Button>
  )
}
