import { ColorField } from '@ui/ColorField'
import { useResizeStore } from '@stores/resize'

export function ResizeBackgroundPicker({ background }: Props) {
  const withDominantBackground = useResizeStore(state => state.withDominantBackground)
  const setBackground = useResizeStore(state => state.setBackground)

  return (
    <ColorField
      label='Background'
      value={background}
      disabled={withDominantBackground}
      onValueChange={setBackground}
    />
  )
}

interface Props {
  background: string
}
