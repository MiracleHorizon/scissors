'use client'

import NextLink from 'next/link'
import { Box, Link } from '@radix-ui/themes'
import { useLayoutEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import styles from './DocsNavigationItem.module.css'

export const DocsNavigationItem = ({ title, hash }: Props) => {
  const [isSelected, setSelected] = useState(false)
  const params = useParams()

  useLayoutEffect(() => {
    setSelected(hash === location.hash)
  }, [params, hash])

  return (
    <Box asChild width='100%'>
      <li>
        <Link asChild color='gray' weight={isSelected ? 'bold' : 'regular'} className={styles.link}>
          <NextLink href={hash} scroll={false}>
            {title}
          </NextLink>
        </Link>
      </li>
    </Box>
  )
}

interface Props {
  title: string
  hash: string
}
