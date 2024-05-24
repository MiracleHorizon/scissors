'use client'

import { Fragment } from 'react'
import { Flex, Separator } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'

import { DocsNavigationItem } from './DocsNavigationItem'
import {
  DOCS_ANCHOR_EXTEND,
  DOCS_ANCHOR_MAIN,
  DOCS_ANCHOR_MODULATE,
  DOCS_ANCHOR_NEGATE,
  DOCS_ANCHOR_RESIZE,
  DOCS_ANCHOR_ROTATE,
  DOCS_ANCHOR_TRIM
} from '@site/paths'
import { BREAKPOINTS_MIN_WIDTH } from '@lib/theme'
import styles from './DocsNavigation.module.css'

const items = [
  {
    title: 'Main',
    hash: DOCS_ANCHOR_MAIN
  },
  {
    title: 'Negate',
    hash: DOCS_ANCHOR_NEGATE
  },
  {
    title: 'Rotate',
    hash: DOCS_ANCHOR_ROTATE
  },
  {
    title: 'Modulate',
    hash: DOCS_ANCHOR_MODULATE
  },
  {
    title: 'Resize',
    hash: DOCS_ANCHOR_RESIZE
  },
  {
    title: 'Extend',
    hash: DOCS_ANCHOR_EXTEND
  },
  {
    title: 'Trim',
    hash: DOCS_ANCHOR_TRIM
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

/*
 * Default export is required to import a client component inside a server component using next/dynamic.
 */
export default DocsNavigation
