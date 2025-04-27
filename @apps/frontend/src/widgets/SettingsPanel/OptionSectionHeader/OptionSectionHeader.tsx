import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Flex, Heading, Link as RadixLink, Separator } from '@radix-ui/themes'

import { Link2Icon } from '@scissors/react-icons/Link2Icon'

import type { Props } from './types'
import styles from './OptionSectionHeader.module.css'

const BadgeNew = lazy(() => import('@ui/badges/BadgeNew').then(mod => ({ default: mod.BadgeNew })))
const BadgeBeta = lazy(() =>
  import('@ui/badges/BadgeBeta').then(mod => ({ default: mod.BadgeBeta }))
)

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
              <Link to={href}>
                {title}
                <Link2Icon width='17px' height='17px' className={styles.linkIcon} />
              </Link>
            </RadixLink>
          ) : (
            <Heading size='3' weight='medium'>
              {title}
            </Heading>
          )}

          {isBeta && (
            <Suspense fallback={null}>
              <BadgeBeta ml='2' />
            </Suspense>
          )}
          {isNew && (
            <Suspense fallback={null}>
              <BadgeNew ml='2' />
            </Suspense>
          )}
        </article>
      </Flex>

      <Flex align='center' gap='1'>
        {children}
      </Flex>
    </header>
  </Flex>
)
