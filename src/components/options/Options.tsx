import dynamic from 'next/dynamic'
import { Fragment } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

const options = [
  { key: 'basic', Component: dynamic(() => import('./Basic').then(mod => mod.BasicOptions)) },
  { key: 'negate', Component: dynamic(() => import('./Negate').then(mod => mod.Negate)) },
  { key: 'blur', Component: dynamic(() => import('./Blur').then(mod => mod.Blur)) },
  { key: 'rotate', Component: dynamic(() => import('./Rotate').then(mod => mod.Rotate)) },
  { key: 'gamma', Component: dynamic(() => import('./Gamma').then(mod => mod.Gamma)) },
  { key: 'normalise', Component: dynamic(() => import('./Normalise').then(mod => mod.Normalise)) },
  { key: 'resize', Component: dynamic(() => import('./Resize').then(mod => mod.Resize)) }
]

export function Options() {
  return (
    <Flex direction='column' gap='2' my='4' py='2'>
      {options.map(({ key, Component }, index) => (
        <Fragment key={key}>
          <Component />
          {index < options.length - 1 && <Separator my='1' size='4' />}
        </Fragment>
      ))}
    </Flex>
  )
}
