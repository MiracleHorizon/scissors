'use client'

import { Fragment } from 'react'
import { Flex, Separator } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'

import { DocsNavigationItem } from './DocsNavigationItem'
import {
  DOCS_HASH_EXTEND,
  DOCS_HASH_MAIN,
  DOCS_HASH_MODULATE,
  DOCS_HASH_NEGATE,
  DOCS_HASH_RESIZE,
  DOCS_HASH_ROTATE,
  DOCS_HASH_TRIM
} from '@site/paths'
import { BREAKPOINTS_MIN_WIDTH } from '@lib/theme'
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
    title: 'Modulate',
    hash: DOCS_HASH_MODULATE
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
    title: 'Trim',
    hash: DOCS_HASH_TRIM
  }
]

const DocsNavigation = () => (
  <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.sm}>
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
  </MediaQuery>
)

export default DocsNavigation
