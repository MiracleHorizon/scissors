import { Switch } from '@/shared/ui'
import { useCommonStore } from '../../../model/common/common.store'

export const GrayscaleSwitch = () => {
  const grayscale = useCommonStore(state => state.grayscale)
  const toggleGrayscale = useCommonStore(state => state.toggleGrayscale)

  return <Switch label='Grayscale' checked={grayscale} onClick={toggleGrayscale} />
}
