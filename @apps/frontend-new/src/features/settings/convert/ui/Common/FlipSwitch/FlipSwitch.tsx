import { Switch } from '@/shared/ui'
import { useCommonStore } from '../../../model/common/common.store'

export const FlipSwitch = () => {
  const flip = useCommonStore(state => state.flip)
  const toggleFlip = useCommonStore(state => state.toggleFlip)

  return <Switch label='Flip' checked={flip} onClick={toggleFlip} />
}
