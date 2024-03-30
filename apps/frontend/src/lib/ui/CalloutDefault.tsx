import { Callout } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef, FC } from 'react'

import { InfoCircledIcon } from '@scissors/react-icons/InfoCircledIcon'

import type { StyleProps } from '@app-types/StyleProps'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const CalloutDefault: FC<Props> = ({ text, style, ...props }) => (
  <Callout.Root
    style={{
      maxWidth: 'max-content',
      borderRadius: 'var(--radius-3)',
      ...style
    }}
    {...props}
  >
    <Callout.Icon>
      <InfoCircledIcon width='18px' height='18px' />
    </Callout.Icon>

    <Callout.Text>{text}</Callout.Text>
  </Callout.Root>
)

interface Props extends ClassNameProps, StyleProps, ComponentPropsWithoutRef<typeof Callout.Root> {
  text: string
}
