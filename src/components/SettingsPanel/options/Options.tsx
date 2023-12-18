'use client'

import { Fragment } from 'react'
import { Flex, type PaddingProps, Separator } from '@radix-ui/themes'

import { BasicOptions } from './Basic'
import { Negate } from './Negate'
import { Blur } from './Blur'
import { Resize } from './Resize'
import { Rotate } from './Rotate'
import { Modulate } from './Modulate'
import { Gamma } from './Gamma'
import { Tint } from './Tint'
import { Normalise } from './Normalise'

const options = [
  { key: 'basic', Component: BasicOptions },
  { key: 'negate', Component: Negate },
  { key: 'blur', Component: Blur },
  { key: 'resize', Component: Resize },
  { key: 'rotate', Component: Rotate },
  { key: 'modulate', Component: Modulate },
  { key: 'gamma', Component: Gamma },
  { key: 'tint', Component: Tint },
  { key: 'normalise', Component: Normalise }
]

const padding: PaddingProps = {
  px: {
    initial: '4',
    md: '5'
  },
  pb: '2',
  pt: '4'
}

export function Options() {
  return (
    <Flex direction='column' gap='2' {...padding}>
      {options.map(({ key, Component }, index) => (
        <Fragment key={key}>
          <Component />
          {index < options.length - 1 && <Separator my='1' size='4' />}
        </Fragment>
      ))}
    </Flex>
  )
}
