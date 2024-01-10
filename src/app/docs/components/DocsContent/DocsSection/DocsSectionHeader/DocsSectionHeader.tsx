'use client'

import Link from 'next/link'
import { Box, Flex, Link as RadixLink } from '@radix-ui/themes'
import { useParams } from 'next/navigation'
import { useLayoutEffect, useRef } from 'react'

import { Link2Icon } from '@ui/icons/Link2Icon'
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
        <Flex asChild align='center' gap='1'>
          <RadixLink asChild size='5' weight='bold'>
            <Link href={hash} scroll={false}>
              <Link2Icon width='18px' height='18px' label='go to section' />
              {title}
            </Link>
          </RadixLink>
        </Flex>
      </header>
    </Box>
  )
}

interface Props {
  title: string
  hash: string
}
