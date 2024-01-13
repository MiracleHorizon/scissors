import { ColorPicker } from '@ui/ColorPicker'
import { useResizeStore } from '@stores/resize'

export function ResizeBackgroundPopover({ background }: Props) {
  const withDominantBackground = useResizeStore(state => state.withDominantBackground)
  const setBackground = useResizeStore(state => state.setBackground)

  return (
    <ColorPicker
      color={background}
      setColor={setBackground}
      disabled={withDominantBackground}
      triggerLabel='Background'
      triggerLabelSize='2'
    />
  )
}

interface Props {
  background: string
}
