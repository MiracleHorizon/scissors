import Link from 'next/link'
import { Flex, Heading, Link as RadixLink, Separator } from '@radix-ui/themes'

import type { Props } from './OptionSectionHeader.types'
import styles from './OptionSectionHeader.module.css'

export function OptionSectionHeader({ children, title, href, icon, ...props }: Props) {
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

            {href ? (
              <RadixLink asChild weight='medium' className={styles.link}>
                <Link href={href}>{title}</Link>
              </RadixLink>
            ) : (
              <Heading size='3' weight='medium'>
                {title}
              </Heading>
            )}
          </article>
        </Flex>

        <Flex align='center' gap='1'>
          {children}
        </Flex>
      </header>
    </Flex>
  )
}
