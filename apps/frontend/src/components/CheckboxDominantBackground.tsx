import type { FC } from 'react'

import { OptionCheckbox, type Props as OptionCheckboxProps } from '@components/OptionCheckbox'

export const CheckboxDominantBackground: FC<Omit<OptionCheckboxProps, 'label'>> = props => (
  <OptionCheckbox label='Use Dominant Background' {...props} />
)
