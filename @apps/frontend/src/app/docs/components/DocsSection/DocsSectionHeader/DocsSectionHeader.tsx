import { Link, useParams } from 'react-router-dom'
import { Box, Flex, Link as RadixLink } from '@radix-ui/themes'
import { useEffect, useRef } from 'react'

import { Link2Icon } from '@scissors/react-icons/Link2Icon'
import { useEscapeAction } from '@hooks/useEscapeAction'

import styles from './DocsSectionHeader.module.css'

interface Props {
  title: string
  hash: string
}

export const DocsSectionHeader = ({ hash, title }: Props) => {
  const { id } = useParams()
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (hash.includes(id as string)) {
      linkRef.current?.focus()
    }
  }, [hash, id])

  useEscapeAction(() => {
    if (linkRef.current) {
      linkRef.current.blur()
    }
  })

  return (
    <div id={hash.slice(1)} className={styles.root}>
      <header data-cy={`${hash.slice(1)}-header`}>
        <Flex asChild align='center' gap='1'>
          <RadixLink asChild size='5' weight='bold'>
            <Link to={hash}>
              <Link2Icon
                width='18px'
                height='18px'
                className={styles.icon}
                data-cy={`${hash.slice(1)}-hash-link`}
              />
              <Box as='span' className={styles.title}>
                {title}
              </Box>
            </Link>
          </RadixLink>
        </Flex>
      </header>
    </div>
  )
}
