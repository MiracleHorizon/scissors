'use client'

import { Fragment } from 'react'
import { Flex, type PaddingProps, Separator } from '@radix-ui/themes'

import { BasicOptions } from './Basic'
import { Negate } from './Negate'
import { Blur } from './Blur'
import { Rotate } from './Rotate'
import { Modulate } from './Modulate'
import { Gamma } from './Gamma'
import { Tint } from './Tint'
import { Normalise } from './Normalise'
import { OutputFormat } from './OutputFormat'
import { InputOutputFileName } from '../InputOutputFileName'
import { useOutputStore } from '@stores/output'

const options = [
  { key: 'basic', Component: BasicOptions },
  { key: 'negate', Component: Negate },
  { key: 'blur', Component: Blur },
  { key: 'rotate', Component: Rotate },
  { key: 'modulate', Component: Modulate },
  { key: 'gamma', Component: Gamma },
  { key: 'tint', Component: Tint },
  { key: 'normalise', Component: Normalise }
]

const padding: PaddingProps = {
  pl: '3',
  pr: '4',
  pb: '2',
  pt: '4'
}

export function Options() {
  const isFileUploaded = useOutputStore(state => state.isFileUploaded())

  return (
    <Flex direction='column' gap='2' {...padding}>
      <InputOutputFileName />

      {options.map(({ key, Component }, index) => (
        <Fragment key={key}>
          <Component />
          {index < options.length - 1 && <Separator my='1' size='4' />}
        </Fragment>
      ))}

      {isFileUploaded && (
        <Fragment>
          <Separator mt='1' size='4' />
          <OutputFormat />
        </Fragment>
      )}
    </Flex>
  )
}
