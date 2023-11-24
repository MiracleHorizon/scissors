import { Flex, Heading, Separator } from '@radix-ui/themes'
import type { PropsWithChildren, ReactNode } from 'react'

import type { MarginProps } from '@libs/radix'
import styles from './OptionSectionHeader.module.css'

export function OptionSectionHeader({ children, title, icon, ...props }: Props) {
  return (
    <Flex asChild align='center' justify='between' width='100%' {...props}>
      <header>
        <Flex asChild align='center'>
          <article>
            {icon && (
              <>
                <Flex asChild align='center' justify='center'>
                  <span>{icon}</span>
                </Flex>
                <Separator orientation='vertical' className={styles.separator} />
              </>
            )}
            <Heading size='3' weight='medium'>
              {title}
            </Heading>
          </article>
        </Flex>

        {children}
      </header>
    </Flex>
  )
}

type Props = PropsWithChildren<
  MarginProps & {
    title: string
    icon?: ReactNode
  }
>
