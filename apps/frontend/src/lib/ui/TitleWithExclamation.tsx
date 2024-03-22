import { Flex, type MarginProps, type PaddingProps } from '@radix-ui/themes'
import type { CSSProperties, FC, PropsWithChildren } from 'react'

import { ExclamationTriangleIcon } from './icons/ExclamationTriangleIcon'
import { getRadixSpaceVar } from '../theme'

export const testId = 'title-with-exclamation'

const iconStyle: CSSProperties = {
  marginRight: getRadixSpaceVar(2)
}

export const TitleWithExclamation: FC<Props> = ({ children, ...props }) => (
  <Flex data-testid={testId} {...props}>
    <ExclamationTriangleIcon color='tomato' width='0.95rem' height='0.95rem' style={iconStyle} />
    {children}
  </Flex>
)

export type Props = PropsWithChildren & MarginProps & PaddingProps
