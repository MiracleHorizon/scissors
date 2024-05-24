import { ColorField } from '@ui/ColorField'
import { useTrimStore } from '@stores/trim'

export const TrimBackgroundPicker=({ background }: Props) =>{
  const setBackground = useTrimStore(state => state.setBackground)

  return <ColorField label='Background' value={background} onValueChange={setBackground} />
}

interface Props {
  background: string
}
