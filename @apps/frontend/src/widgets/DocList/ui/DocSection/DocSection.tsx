import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Flex, Link as RadixLink, Text } from '@radix-ui/themes'
import { Link2Icon } from '@scissors/react-icons/Link2Icon'

import { DocTable } from '@/entities/docs'

import styles from './DocSection.module.css'

export const DocSection = ({
  title,
  hash,
  tableContent
}: {
  title: string
  hash: string
  tableContent: NonNullable<ReactNode>
}) => {
  const elementId = hash.startsWith('#') ? hash.slice(1) : hash.split('#')[1]

  return (
    <Flex id={elementId} direction='column' gapY='4' style={{ scrollMarginTop: '64px' }}>
      <header>
        <Flex asChild align='center' gap='1'>
          <RadixLink asChild size='5' underline='none' className={styles.link}>
            <Link to={hash}>
              <Link2Icon width='18px' height='18px' />
              <Text weight='medium'>{title}</Text>
            </Link>
          </RadixLink>
        </Flex>
      </header>

      <DocTable content={tableContent} />
    </Flex>
  )
}
