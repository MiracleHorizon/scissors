'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { PATH_ROOT } from '@site/paths'
import type { ButtonProps } from '@lib/theme'

export const ButtonHome = ({ radius = 'large', ...props }: ButtonProps & MarginProps) => {
  const router = useRouter()

  const navigateToHome = () => router.replace(PATH_ROOT)

  return (
    <Button {...props} radius={radius} onClick={navigateToHome}>
      Go to Homepage
    </Button>
  )
}
