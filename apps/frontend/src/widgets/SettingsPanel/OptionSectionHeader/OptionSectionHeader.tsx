import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Flex, Heading, Link as RadixLink, Separator } from '@radix-ui/themes'

import { Link2Icon } from '@scissors/react-icons/Link2Icon'

import type { Props } from './types'
import styles from './OptionSectionHeader.module.css'

const BadgeNew = dynamic(() => import('@ui/badges/BadgeNew').then(mod => mod.BadgeNew), {
  ssr: false
})
const BadgeBeta = dynamic(() => import('@ui/badges/BadgeBeta').then(mod => mod.BadgeBeta), {
  ssr: false
})

export const OptionSectionHeader = ({
  children,
  title,
  href,
  icon,
  isBeta,
  isNew,
  ...props
}: Props) => (
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
