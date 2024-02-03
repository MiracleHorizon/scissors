import { Fragment } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

import { DocsNavigationItem } from './DocsNavigationItem'
import {
  DOCS_HASH_EXTEND,
  DOCS_HASH_MAIN,
  DOCS_HASH_MODULATE,
  DOCS_HASH_NEGATE,
  DOCS_HASH_RESIZE,
  DOCS_HASH_ROTATE
} from '@site/paths'
import styles from './DocsNavigation.module.css'

const items = [
  {
    title: 'Main',
    hash: DOCS_HASH_MAIN
  },
  {
    title: 'Negate',
    hash: DOCS_HASH_NEGATE
  },
  {
    title: 'Rotate',
    hash: DOCS_HASH_ROTATE
  },
  {
    title: 'Resize',
    hash: DOCS_HASH_RESIZE
  },
  {
    title: 'Extend',
    hash: DOCS_HASH_EXTEND
  },
  {
    title: 'Modulate',
    hash: DOCS_HASH_MODULATE
  }
]

export const DocsNavigation = () => (
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
