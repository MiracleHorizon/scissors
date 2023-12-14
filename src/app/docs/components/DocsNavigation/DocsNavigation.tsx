import { Box, Flex, Separator } from '@radix-ui/themes'
import { Fragment } from 'react'

import { DocsNavigationItem } from './DocsNavigationItem'
import styles from './DocsNavigation.module.css'

const items = [
  {
    title: 'Main',
    hash: '#main'
  },
  {
    title: 'Resize',
    hash: '#resize'
  },
  {
    title: 'Modulate',
    hash: '#modulate'
  }
]

export function DocsNavigation() {
  return (
    <Box asChild ml='6'>
      <nav className={styles.root}>
        <Flex asChild align='start' justify='center' direction='column' width='100%'>
          <ul>
            {items.map((item, index) => (
              <Fragment key={item.hash}>
                <DocsNavigationItem {...item} />
                {index < items.length - 1 && <Separator my='2' size='4' orientation='horizontal' />}
              </Fragment>
            ))}
          </ul>
        </Flex>
      </nav>
    </Box>
  )
}
