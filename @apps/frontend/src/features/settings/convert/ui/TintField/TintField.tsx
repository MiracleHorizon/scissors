import { useController } from 'react-hook-form'
import { ColorField } from '@/shared/ui'

export const TintField = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'tint'
  })

  return <ColorField withPalette label='Tint' value={value} onValueChange={onChange} />
}
