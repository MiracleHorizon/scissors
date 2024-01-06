import { Flex, Separator } from '@radix-ui/themes'
import { Fragment } from 'react'

import { DocsNavigationItem } from './DocsNavigationItem'
import { DocsHash } from '@lib/router'
import styles from './DocsNavigation.module.css'

const items = [
  {
    title: 'Main',
    hash: DocsHash.MAIN
  },
  {
    title: 'Rotate',
    hash: DocsHash.ROTATE
  },
  {
    title: 'Resize',
    hash: DocsHash.RESIZE
  },
  {
    title: 'Extend',
    hash: DocsHash.EXTEND
  },
  {
    title: 'Modulate',
    hash: DocsHash.MODULATE
  }
]

export function DocsNavigation() {
  return (
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
  )
}
