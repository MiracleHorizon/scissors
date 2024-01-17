import type { FC } from 'react'

import styles from './ColorSwatch.module.css'

export const ColorSwatch: FC<Props> = ({ color }) => (
  <div style={{ backgroundColor: color }} className={styles.root} />
)

interface Props {
  color: string
}
