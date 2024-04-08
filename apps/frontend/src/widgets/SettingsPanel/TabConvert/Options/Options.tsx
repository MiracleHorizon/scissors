import { Fragment } from 'react'
import { Card, Flex, Separator } from '@radix-ui/themes'

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
import styles from './Options.module.css'

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

export function Options() {
  const isFileUploaded = useOutputStore(state => state.isFileUploaded())

  return (
    <Flex width='100%' direction='column' gap='2'>
      <InputOutputFileName />

      {options.map(({ key, Component }) => (
        <Card key={key} className={styles.card}>
          <Component />
        </Card>
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
