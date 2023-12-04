'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Flex, IconButton, Link as RadixLink, Text, Tooltip } from '@radix-ui/themes'
import { ReaderIcon } from '@radix-ui/react-icons'

import { Route } from '@shared/router'
import styles from './DocumentationLink.module.css'

export function DocumentationLink() {
  const pathname = usePathname()

  if (pathname === Route.DOCS || pathname.startsWith(Route.DOCS)) {
    return null
  }

  return (
    <Tooltip content='Watch the documentation'>
      <Flex asChild align='center' className={styles.root}>
        <RadixLink asChild color='gray' underline='hover' size='2' mr='4'>
          <Link href={Route.DOCS}>
            <Text className={styles.text}>Documentation</Text>
            <IconButton color='gray' variant='ghost' size='2' radius='large'>
              <ReaderIcon width='18px' height='18px' className={styles.icon} />
            </IconButton>
          </Link>
        </RadixLink>
      </Flex>
    </Tooltip>
  )
}
