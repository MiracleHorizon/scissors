'use client'

import { Flex, Link, Popover, Strong } from '@radix-ui/themes'
import type { FC, PropsWithChildren } from 'react'

import styles from './DocsDetailsPopover.module.css'

type Props = PropsWithChildren<{
  title: string
  moreInfoLink?: string
}>

export const DocsDetailsPopover: FC<Props> = ({ children, title, moreInfoLink }) => (
  <Popover.Root>
    <Popover.Trigger>
      <Strong className={styles.trigger}>{title}</Strong>
    </Popover.Trigger>

    <Popover.Content size='1' align='center' minWidth='200px' maxWidth='424px'>
      <Flex direction='column'>
        {children}

        {moreInfoLink && (
          <Link
            target='_blank'
            rel='noreferrer'
            underline='always'
            weight='medium'
            href={moreInfoLink}
            ml='auto'
            mt='2px'
          >
            More info
          </Link>
        )}
      </Flex>
    </Popover.Content>
  </Popover.Root>
)
