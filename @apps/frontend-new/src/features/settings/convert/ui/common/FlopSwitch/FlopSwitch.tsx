import { Switch } from '@/shared/ui'
import { useCommonStore } from '../../../model/common/common.store'

export const FlopSwitch = () => {
  const flop = useCommonStore(state => state.flop)
  const toggleFlop = useCommonStore(state => state.toggleFlop)

  return <Switch label='Flop' checked={flop} onClick={toggleFlop} />
}
