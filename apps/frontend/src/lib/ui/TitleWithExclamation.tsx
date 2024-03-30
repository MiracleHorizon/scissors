import { Flex } from '@radix-ui/themes'
import type { PaddingProps, MarginProps } from '@radix-ui/themes/props'
import type { CSSProperties, FC, PropsWithChildren } from 'react'

import { ExclamationTriangleIcon } from '@scissors/react-icons/ExclamationTriangleIcon'

import { getRadixSpaceVar } from '@lib/theme'

export const testId = 'title-with-exclamation'

const iconStyle: CSSProperties = {
  marginRight: getRadixSpaceVar(2)
} as const

export const TitleWithExclamation: FC<Props> = ({ children, ...props }) => (
  <Flex data-testid={testId} {...props}>
    <ExclamationTriangleIcon color='tomato' width='0.95rem' height='0.95rem' style={iconStyle} />
    {children}
  </Flex>
)

export type Props = PropsWithChildren & MarginProps & PaddingProps
