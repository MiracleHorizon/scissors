import { Switch } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const FlipSwitch = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'flip'
  })

  return <Switch label='Flip' checked={Boolean(value)} onCheckedChange={onChange} />
}
