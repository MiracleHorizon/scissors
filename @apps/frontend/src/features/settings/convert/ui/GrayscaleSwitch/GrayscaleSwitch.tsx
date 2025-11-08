import { Switch } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const GrayscaleSwitch = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'grayscale'
  })

  return <Switch label='Grayscale' checked={Boolean(value)} onCheckedChange={onChange} />
}
