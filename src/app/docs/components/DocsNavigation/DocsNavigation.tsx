import { Flex, Separator } from '@radix-ui/themes'
import { Fragment } from 'react'

import { DocsNavigationItem } from './DocsNavigationItem'
import { DOCS_HASH } from '@lib/router'
import styles from './DocsNavigation.module.css'

const items = [
  {
    title: 'Main',
    hash: DOCS_HASH.MAIN
  },
  {
    title: 'Negate',
    hash: DOCS_HASH.NEGATE
  },
  {
    title: 'Rotate',
    hash: DOCS_HASH.ROTATE
  },
  {
    title: 'Resize',
    hash: DOCS_HASH.RESIZE
  },
  {
    title: 'Extend',
    hash: DOCS_HASH.EXTEND
  },
  {
    title: 'Modulate',
    hash: DOCS_HASH.MODULATE
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
