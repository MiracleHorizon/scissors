import { OptionSwitch } from '@components/OptionSwitch'
import { useConvertStore } from '@stores/convert'

export function SwitchNegateAlpha() {
  const negate = useConvertStore(state => state.negate?.value)
  const negateAlpha = useConvertStore(state => state.negate?.alpha)
  const toggleNegateAlpha = useConvertStore(state => state.toggleNegateAlpha)

  const handleToggleNegateAlpha = () => toggleNegateAlpha()

  return (
    <OptionSwitch
      title='Alpha'
      disabled={!negate}
      checked={negateAlpha}
      onClick={handleToggleNegateAlpha}
    />
  )
}
