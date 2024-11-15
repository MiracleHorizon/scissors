import { Callout as BaseCallout } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef } from 'react'

import { InfoCircledIcon } from '@scissors/react-icons/InfoCircledIcon'

import type { StyleProps, ClassNameProps } from '@/shared/lib'

interface Props
  extends ClassNameProps,
    StyleProps,
    ComponentPropsWithoutRef<typeof BaseCallout.Root> {
  text: string
}

export const Callout = ({ text, style, ...props }: Props) => (
  <BaseCallout.Root
    style={{
      maxWidth: 'max-content',
      borderRadius: 'var(--radius-3)',
      ...style
    }}
    {...props}
  >
    <BaseCallout.Icon>
      <InfoCircledIcon width='18px' height='18px' />
    </BaseCallout.Icon>

    <BaseCallout.Text>{text}</BaseCallout.Text>
  </BaseCallout.Root>
)
