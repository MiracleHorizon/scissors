import { Fragment } from 'react'
import { Card, Flex, Separator } from '@radix-ui/themes'

import { BasicOptions } from './basic-options'
import { Negate } from './negate'
import { Blur } from './blur'
import { Rotate } from './rotate'
import { Modulate } from './modulate'
import { Gamma } from './gamma'
import { Tint } from './tint'
import { Normalise } from './normalise'
import { OutputFormat } from './output-format'
import { InputOutputFileName } from './output-file-name'
import { useOutputStore } from '@stores/output'
import styles from './options.module.css'

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
