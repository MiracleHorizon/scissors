import { Switch } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const FlopSwitch = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'flop'
  })

  return <Switch label='Flop' checked={Boolean(value)} onCheckedChange={onChange} />
}
