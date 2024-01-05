import { Flex, type MarginProps, type PaddingProps } from '@radix-ui/themes'
import type { CSSProperties, PropsWithChildren } from 'react'

import { ExclamationTriangleIcon } from '@ui/icons/ExclamationTriangleIcon'

const iconStyle: CSSProperties = {
  marginRight: 'var(--space-2)'
}

export function TitleWithExclamation({ children, ...props }: Props) {
  return (
    <Flex {...props}>
      <ExclamationTriangleIcon color='tomato' width='0.95rem' height='0.95rem' style={iconStyle} />
      {children}
    </Flex>
  )
}

type Props = PropsWithChildren & MarginProps & PaddingProps
