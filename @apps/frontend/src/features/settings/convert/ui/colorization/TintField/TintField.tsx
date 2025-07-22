import { useTintStore } from '../../../model/colorization/tint.store'
import { ColorField } from '@/shared/ui'

export const TintField = () => {
  const tint = useTintStore(state => state.get())
  const setTint = useTintStore(state => state.set)

  return <ColorField withPalette label='Tint' value={tint} onValueChange={setTint} />
}
