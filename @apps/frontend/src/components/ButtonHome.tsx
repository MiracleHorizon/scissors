import { useNavigate } from 'react-router-dom'
import { Button } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { PATH_ROOT } from '@site/paths'
import type { ButtonProps } from '@lib/theme'

export const ButtonHome = ({ radius = 'large', ...props }: ButtonProps & MarginProps) => {
  const navigate = useNavigate()

  const navigateToHome = () => navigate(PATH_ROOT, { replace: true })

  return (
    <Button {...props} radius={radius} onClick={navigateToHome}>
      Go to Homepage
    </Button>
  )
}
