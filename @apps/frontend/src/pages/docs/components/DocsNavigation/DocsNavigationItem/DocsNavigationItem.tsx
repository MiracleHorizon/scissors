import { Link, useParams } from 'react-router-dom'
import { Box } from '@radix-ui/themes'
import { useLayoutEffect, useState } from 'react'
import { clsx } from 'clsx'

import styles from './DocsNavigationItem.module.css'

interface Props {
  title: string
  hash: string
}

export const DocsNavigationItem = ({ title, hash }: Props) => {
  const params = useParams()
  const [isSelected, setIsSelected] = useState(false)

  useLayoutEffect(() => {
    setIsSelected(hash === location.hash)
  }, [hash, location.hash, params])

  return (
    <Box asChild height='7'>
      <li>
        <Link
          to={hash}
          className={clsx(styles.link, isSelected ? styles.selectedLink : styles.unselectedLink)}
        >
          {title}
        </Link>
      </li>
    </Box>
  )
}
