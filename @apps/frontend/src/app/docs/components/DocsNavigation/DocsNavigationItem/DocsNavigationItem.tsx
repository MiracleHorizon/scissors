'use client'

import NextLink from 'next/link'
import { Box, Link } from '@radix-ui/themes'
import { useLayoutEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { clsx } from 'clsx'

import styles from './DocsNavigationItem.module.css'

interface Props {
  title: string
  hash: string
}

export const DocsNavigationItem = ({ title, hash }: Props) => {
  const [isSelected, setSelected] = useState(false)
  const params = useParams()

  useLayoutEffect(() => {
    setSelected(hash === location.hash)
  }, [params, hash])

  return (
    <Box asChild width='100%'>
      <li>
        <Link
          asChild
          weight='medium'
          underline='none'
          className={clsx(styles.link, isSelected ? styles.selectedLink : styles.unselectedLink)}
        >
          <NextLink href={hash} scroll={false} data-cy={`docs-navigation-link-${hash}`}>
            {title}
          </NextLink>
        </Link>
      </li>
    </Box>
  )
}
