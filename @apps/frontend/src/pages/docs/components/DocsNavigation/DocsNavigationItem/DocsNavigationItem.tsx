import { Link, useParams } from 'react-router-dom'
import { Box } from '@radix-ui/themes'
import { useLayoutEffect, useState, useEffect } from 'react'
import { clsx } from 'clsx'

import styles from './DocsNavigationItem.module.css'

export const DocsNavigationItem = ({ title, hash }: { title: string; hash: string }) => {
  const params = useParams()
  const [isSelected, setIsSelected] = useState(false)

  const checkIfSelected = () => {
    const currentHash = location.hash
    return hash === currentHash
  }

  useEffect(() => {
    const handleHashChange = () => {
      setIsSelected(checkIfSelected())
    }

    setIsSelected(checkIfSelected())

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [hash, params])

  useLayoutEffect(() => {
    if (isSelected && hash) {
      const elementId = hash.slice(1)
      const element = document.getElementById(elementId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }, 100)
      }
    }
  }, [isSelected, hash])

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
