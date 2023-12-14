'use client'

import NextLink from 'next/link'
import { Box, Link } from '@radix-ui/themes'
import { useParams } from 'next/navigation'
import { useLayoutEffect, useRef } from 'react'

import styles from './DocsSectionHeader.module.css'

export function DocsSectionHeader({ title, hash }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const params = useParams()

  useLayoutEffect(() => {
    const locationHash = location.hash
    const rootNode = rootRef.current

    if (locationHash.length === 0 || locationHash !== hash || !rootNode) return

    rootNode.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [params, hash])

  return (
    <Box asChild pt='3' pl='1' ref={rootRef} className={styles.root}>
      <header>
        <Link asChild size='5' weight='bold'>
          <NextLink href={hash} scroll={false}>
            {title}
          </NextLink>
        </Link>
      </header>
    </Box>
  )
}

interface Props {
  title: string
  hash: string
}
