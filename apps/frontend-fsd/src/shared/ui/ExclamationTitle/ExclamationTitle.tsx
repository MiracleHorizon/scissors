import { Flex } from '@radix-ui/themes'
import type { PaddingProps, MarginProps } from '@radix-ui/themes/props'
import type { CSSProperties, PropsWithChildren } from 'react'

import { ExclamationTriangleIcon } from '@scissors/react-icons/ExclamationTriangleIcon'

import { getRadixSpaceVar } from '@/entities/theme'

export const testId = 'exclamation-title'

const iconStyle: CSSProperties = {
  marginRight: getRadixSpaceVar(2)
} as const

export type Props = PropsWithChildren & MarginProps & PaddingProps

export const ExclamationTitle = ({ children, ...props }: Props) => (
  <Flex align='center' width='100%' data-testid={testId} {...props}>
    <ExclamationTriangleIcon color='tomato' width='0.95rem' height='0.95rem' style={iconStyle} />
    {children}
  </Flex>
)
