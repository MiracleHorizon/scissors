'use client'

import { type FC, memo } from 'react'
import { IconButton, type MarginProps } from '@radix-ui/themes'

import { Cross2Icon } from '@ui/icons/Cross2Icon'

export const ButtonClear: FC<Props> = memo(props => (
  <IconButton size='1' color='gray' variant='ghost' radius='full' {...props}>
    <Cross2Icon label='clear' />
  </IconButton>
))

ButtonClear.displayName = 'ButtonClear'

interface Props extends MarginProps {
  onClick: VoidFunction
}
