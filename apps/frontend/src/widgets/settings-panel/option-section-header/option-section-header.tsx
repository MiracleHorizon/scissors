import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Flex, Heading, Link as RadixLink, Separator } from '@radix-ui/themes'
import type { FC } from 'react'

import { Link2Icon } from '@scissors/react-icons/Link2Icon'

import type { Props } from './types'
import styles from './option-section-header.module.css'

const BadgeNew = dynamic(() => import('@ui/badges/badge-new').then(mod => mod.BadgeNew), {
  ssr: false
})
const BadgeBeta = dynamic(() => import('@ui/badges/badge-beta').then(mod => mod.BadgeBeta), {
  ssr: false
})

export const OptionSectionHeader: FC<Props> = ({
  children,
  title,
  href,
  icon,
  isBeta,
  isNew,
  ...props
}) => (
  <Flex asChild align='center' justify='between' width='100%' {...props}>
    <header>
      <Flex asChild align='center'>
        <article>
          {icon && (
            <>
              <Flex asChild align='center' justify='center'>
                <span>{icon}</span>
              </Flex>
              <Separator orientation='vertical' mx='6px' my='0' />
            </>
          )}

          {href ? (
            <RadixLink asChild weight='medium' className={styles.link}>
              <Link href={href}>
                {title}
                <Link2Icon width='17px' height='17px' className={styles.linkIcon} />
              </Link>
            </RadixLink>
          ) : (
            <Heading size='3' weight='medium'>
              {title}
            </Heading>
          )}

          {isBeta && <BadgeBeta ml='2' />}
          {isNew && <BadgeNew ml='2' />}
        </article>
      </Flex>

      <Flex align='center' gap='1'>
        {children}
      </Flex>
    </header>
  </Flex>
)
