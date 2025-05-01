import { Switch } from '@/shared/ui'
import { useCommonStore } from '../../../model/common/common.store'

export const NegateSwitch = () => {
  const negate = useCommonStore(state => state.negate)
  const toggleNegate = useCommonStore(state => state.toggleNegate)

  return <Switch label='Negate' checked={negate} onClick={toggleNegate} />
}
