import { Switch } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const NegateSwitch = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'negate'
  })

  return <Switch label='Negate' checked={Boolean(value)} onCheckedChange={onChange} />
}
