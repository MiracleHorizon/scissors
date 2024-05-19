import { ColorField } from '@ui/color-field'
import { useTrimStore } from '@stores/trim'

export function TrimBackgroundPicker({ background }: Props) {
  const setBackground = useTrimStore(state => state.setBackground)

  return <ColorField label='Background' value={background} onValueChange={setBackground} />
}

interface Props {
  background: string
}
