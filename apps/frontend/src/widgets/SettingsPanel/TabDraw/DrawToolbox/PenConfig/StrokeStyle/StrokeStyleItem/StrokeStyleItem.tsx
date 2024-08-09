import { ColorSwatch } from '@ui/ColorSwatch'
import { useDrawStore } from '@stores/draw'
import styles from './StrokeStyleItem.module.css'

interface Props {
  color: string
}

export const StrokeStyleItem = ({ color }: Props) => {
  const setStrokeStyle = useDrawStore(state => state.setStrokeStyle)

  const onClick = () => setStrokeStyle(color)

  return <ColorSwatch key={color} className={styles.swatch} color={color} onClick={onClick} />
}
