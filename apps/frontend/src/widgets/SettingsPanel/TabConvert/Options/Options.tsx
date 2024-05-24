import { Card, Flex } from '@radix-ui/themes'

import { BasicOptions } from './Basic'
import { Negate } from './Negate'
import { Blur } from './Blur'
import { Rotate } from './Rotate'
import { Modulate } from './Modulate'
import { Gamma } from './Gamma'
import { Tint } from './Tint'
import { Normalise } from './Normalise'
import { InputOutputFileName } from './OutputFileName'
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

export const Options = () => (
  <Flex width='100%' direction='column' gap='2'>
    <InputOutputFileName />

    {options.map(({ key, Component }) => (
      <Card key={key} className={styles.card}>
        <Component />
      </Card>
    ))}
  </Flex>
)
