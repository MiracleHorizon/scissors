import { Link } from 'react-router-dom'
import { Flex, Link as RadixLink, Text } from '@radix-ui/themes'

import { Link2Icon } from '@scissors/react-icons/Link2Icon'

import styles from './DocsSectionHeader.module.css'

export const DocsSectionHeader = ({ hash, title }: { title: string; hash: string }) => {
  const elementId = hash.startsWith('#') ? hash.slice(1) : hash.split('#')[1]

  return (
    <div id={elementId} className={styles.root}>
      <header>
        <Flex asChild align='center' gap='1'>
          <RadixLink asChild size='5'>
            <Link to={hash}>
              <Link2Icon width='18px' height='18px' />
              <Text as='span' weight='bold'>
                {title}
              </Text>
            </Link>
          </RadixLink>
        </Flex>
      </header>
    </div>
  )
}
