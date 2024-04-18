import type { FC } from 'react'

import { Checkbox, type Props as CheckboxProps } from '@design-system/checkbox'

export const CheckboxDominantBackground: FC<Omit<CheckboxProps, 'label'>> = props => (
  <Checkbox label='Use Dominant Background' {...props} />
)
