'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Flex, Link as RadixLink } from '@radix-ui/themes'
import cn from 'classnames'

import styles from './NavigationItem.module.css'

export function NavigationItem({ title, path }: Props) {
  const pathname = usePathname()
  const isSelected = pathname === path

  return (
    <Flex
      asChild
      align='center'
      justify='center'
      className={cn(styles.root, isSelected ? styles.selected : styles.unselected)}
    >
      <li>
        <RadixLink
          asChild
          size='2'
          weight={isSelected ? 'bold' : 'regular'}
          className={styles.link}
        >
          <Link href={path}>{title}</Link>
        </RadixLink>
      </li>
    </Flex>
  )
}

interface Props {
  title: string
  path: string
}
