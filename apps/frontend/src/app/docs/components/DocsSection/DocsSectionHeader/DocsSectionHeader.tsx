'use client'

import Link from 'next/link'
import { Box, Flex, Link as RadixLink } from '@radix-ui/themes'
import { useParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { Link2Icon } from '@scissors/react-icons/Link2Icon'

import styles from './DocsSectionHeader.module.css'

export const DocsSectionHeader = ({ title, hash }: Props) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const params = useParams()

  useEffect(() => {
    const locationHash = location.hash
    const rootNode = rootRef.current

    if (locationHash.length === 0 || locationHash !== hash || !rootNode) return

    rootNode.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [params, hash])

  return (
    <Box asChild pt='5' pl='1' ref={rootRef} className={styles.root}>
      <header data-cy={`docs-section-header-${title.toLowerCase()}`}>
        <Flex asChild align='center' gap='1'>
          <RadixLink asChild size='5' weight='bold'>
            <Link href={hash} scroll={false}>
              <Link2Icon
                width='18px'
                height='18px'
                label={`go to "${title.toLowerCase()}" section`}
              />

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
