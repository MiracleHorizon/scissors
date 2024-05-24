import { ColorField } from '@ui/ColorField'
import { useTrimStore } from '@stores/trim'

interface Props {
  background: string
}

export const TrimBackgroundPicker = ({ background }: Props) => {
  const setBackground = useTrimStore(state => state.setBackground)

  return <ColorField label='Background' value={background} onValueChange={setBackground} />
}
