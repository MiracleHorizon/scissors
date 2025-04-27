import { Checkbox, type Props as CheckboxProps } from '@lib/ui/Checkbox'

export const CheckboxDominantBackground = (props: Omit<CheckboxProps, 'label'>) => (
  <Checkbox label='Use Dominant Background' {...props} />
)
