import { useCallback, useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { Flex, Text } from '@radix-ui/themes'
import clsx from 'clsx'

import styles from './NavigationItem.module.css'

export const NavigationItem = ({ title, value }: { title: string; value: string }) => {
  const params = useParams()
  const location = useLocation()

  const checkIfSelected = useCallback(() => `#${value}` === location.hash, [value, location.hash])

  const [isSelected, setIsSelected] = useState(checkIfSelected())

  useEffect(() => {
    setIsSelected(checkIfSelected())
  }, [params])

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
