import { ColorPicker } from '@ui/ColorPicker'
import { useTrimStore } from '@stores/trim'

export function TrimBackgroundPicker({ background }: Props) {
  const setBackground = useTrimStore(state => state.setBackground)

  return (
    <ColorPicker
      color={background}
      setColor={setBackground}
      triggerLabel='Background'
      triggerLabelSize='2'
    />
  )
}

interface Props {
  background: string
}
