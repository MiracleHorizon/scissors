import { Fragment } from 'react'
import { Flex, Separator } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'

import { BasicOptions } from './Basic'
import { Negate } from './Negate'
import { Blur } from './Blur'
import { Rotate } from './Rotate'
import { Modulate } from './Modulate'
import { Gamma } from './Gamma'
import { Tint } from './Tint'
import { Normalise } from './Normalise'
import { OutputFormat } from './OutputFormat'
import { InputOutputFileName } from './OutputFileName'
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
] as const

const padding: PaddingProps = {
  pl: '3',
  pr: '4',
  pt: '3',
  pb: '4'
} as const

export function Options() {
  const isFileUploaded = useOutputStore(state => state.isFileUploaded())

  return (
    <Flex direction='column' gap='2' {...padding}>
      <InputOutputFileName />

      <Separator mt='8px' mb='1' size='4' />

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
