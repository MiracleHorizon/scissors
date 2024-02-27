'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Flex, IconButton, Link as RadixLink, Text, Tooltip } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

import styles from './NavigationItem.module.css'

export function NavigationItem({ label, href, tooltipContent, icon, ...attributes }: Props) {
  const pathname = usePathname()
  const isSelected = pathname === href || pathname.startsWith(href)

  return (
    <Tooltip content={tooltipContent}>
      <Flex
        asChild
        align='center'
        className={clsx(styles.root, {
          [styles.selected]: isSelected
        })}
      >
        <RadixLink asChild color='gray' underline='hover' size='2' className={styles.link}>
          <Link {...attributes} href={href}>
            <Text className={styles.text}>{label}</Text>
            <IconButton
              color='gray'
              variant='ghost'
              size='2'
              radius='large'
              className={styles.iconButton}
            >
              {icon}
            </IconButton>
          </Link>
        </RadixLink>
      </Flex>
    </Tooltip>
  )
}

interface Props extends Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> {
  label: string
  href: string
  tooltipContent: string
  icon: ReactNode
}
