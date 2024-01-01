import { useMemo } from 'react'

import styles from './ColorSwatch.module.css'

export function ColorSwatch({ color }: Props) {
  const previewBoxStyle = useMemo(() => ({ backgroundColor: color }), [color])

  return <div style={previewBoxStyle} className={styles.root} />
}

interface Props {
  color: string
}
