'use client'

import { Flex, Link, Popover, Strong } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import styles from './DetailsPopover.module.css'

export function DetailsPopover({ children, title, moreInfoLink }: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Strong className={styles.trigger}>{title}</Strong>
      </Popover.Trigger>
      <Popover.Content align='center' size='1' className={styles.content}>
        <Flex direction='column'>
          {children}
          {moreInfoLink && (
            <Link
              target='_blank'
              underline='always'
              weight='medium'
              href={moreInfoLink}
              className={styles.moreInfo}
            >
              More info
            </Link>
          )}
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

type Props = PropsWithChildren<{
  title: string
  moreInfoLink?: string
}>
