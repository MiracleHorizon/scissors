import type { FC } from 'react'

import { OptionCheckbox, type Props as OptionCheckboxProps } from './OptionCheckbox'

export const CheckboxDominantBackground: FC<Omit<OptionCheckboxProps, 'title'>> = props => (
  <OptionCheckbox title='Use Dominant Background' {...props} />
)
