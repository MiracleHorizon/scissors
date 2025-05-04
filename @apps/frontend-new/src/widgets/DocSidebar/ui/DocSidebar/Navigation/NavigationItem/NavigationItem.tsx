import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { Flex, Text } from '@radix-ui/themes'
import clsx from 'clsx'

import styles from './NavigationItem.module.css'

export const NavigationItem = ({ title, value }: { title: string; value: string }) => {
  const hash = `#${value}`
  const params = useParams()
  const location = useLocation()

  const checkIfSelected = useCallback(() => hash === location.hash, [hash, location.hash])

  const [isSelected, setIsSelected] = useState(checkIfSelected())

  useEffect(() => {
    setIsSelected(checkIfSelected())
  }, [params])

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
    <li>
      <Flex
        asChild
        width='100%'
        height='36px'
        align='center'
        px='10px'
        className={clsx(styles.root, isSelected && styles.selected)}
      >
        <Link to={`/docs#${value}`}>
          <Text size='2'>{title}</Text>
        </Link>
      </Flex>
    </li>
  )
}
