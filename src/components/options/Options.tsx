'use client'

import dynamic from 'next/dynamic'
import { Fragment } from 'react'
import { Flex, type PaddingProps, Separator } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'

const Format = dynamic(() => import('./Format').then(mod => mod.Format))

const options = [
  { key: 'basic', Component: dynamic(() => import('./Basic').then(mod => mod.BasicOptions)) },
  { key: 'negate', Component: dynamic(() => import('./Negate').then(mod => mod.Negate)) },
  { key: 'blur', Component: dynamic(() => import('./Blur').then(mod => mod.Blur)) },
  { key: 'rotate', Component: dynamic(() => import('./Rotate').then(mod => mod.Rotate)) },
  { key: 'resize', Component: dynamic(() => import('./Resize').then(mod => mod.Resize)) },
  { key: 'modulate', Component: dynamic(() => import('./Modulate').then(mod => mod.Modulate)) },
  { key: 'gamma', Component: dynamic(() => import('./Gamma').then(mod => mod.Gamma)) },
  { key: 'tint', Component: dynamic(() => import('./Tint').then(mod => mod.Tint)) },
  { key: 'normalise', Component: dynamic(() => import('./Normalise').then(mod => mod.Normalise)) }
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
  const file = useConvertStore(state => state.file)

  return (
    <Flex direction='column' gap='2' {...padding}>
      {options.map(({ key, Component }, index) => (
        <Fragment key={key}>
          <Component />
          {index < options.length - 1 && <Separator my='1' size='4' />}
        </Fragment>
      ))}

      {file && (
        <Fragment>
          <Separator mt='1' size='4' />
          <Format />
        </Fragment>
      )}
    </Flex>
  )
}
