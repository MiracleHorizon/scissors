import { Link, useParams } from 'react-router-dom'
import { Box } from '@radix-ui/themes'
import { useLayoutEffect, useState, useEffect } from 'react'
import { clsx } from 'clsx'

import styles from './DocsNavigationItem.module.css'

interface Props {
  title: string
  hash: string
}

export const DocsNavigationItem = ({ title, hash }: Props) => {
  const params = useParams()
  const [isSelected, setIsSelected] = useState(false)

  // Function to check if current hash matches this item
  const checkIfSelected = () => {
    const currentHash = location.hash
    return hash === currentHash
  }

  // Update selected state whenever location changes
  useEffect(() => {
    const handleHashChange = () => {
      setIsSelected(checkIfSelected())
    }

    // Set initial state
    setIsSelected(checkIfSelected())

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [hash, params])

  // Handle scrolling when this item is selected
  useLayoutEffect(() => {
    if (isSelected && hash) {
      const elementId = hash.slice(1) // Remove the # from the hash
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
