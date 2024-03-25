import { Grid } from '@radix-ui/themes'
import type { FC } from 'react'

import { ColorSwatch } from '@ui/ColorSwatch'
import styles from './ColorPickerSwatches.module.css'

const colors = [
  '#2e2e2e',
  '#868e96',
  '#fa5252',
  '#e64980',
  '#be4bdb',
  '#7950f2',
  '#4c6ef5',
  '#228be6',
  '#15aabf',
  '#12b886',
  '#40c057',
  '#82c91e',
  '#fab005',
  '#fd7e14'
]

const rows = 2
const columns = Math.floor(colors.length / rows).toString()

export const ColorPickerSwatches: FC<Props> = ({ setColor }) => (
  <Grid columns={columns} gap='1'>
    {colors.map(color => (
      <ColorPickerSwatch key={color} color={color} setColor={setColor} />
    ))}
  </Grid>
)

/* eslint no-unused-vars: 0 */
interface Props {
  setColor: (color: string) => void
}

function ColorPickerSwatch({ color, setColor }: SwatchProps) {
  const handleClick = () => setColor(color)

  return <ColorSwatch className={styles.swatch} color={color} onClick={handleClick} />
}

interface SwatchProps extends Props {
  color: string
}
