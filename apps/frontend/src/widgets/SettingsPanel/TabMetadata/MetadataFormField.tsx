import { TextField } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import { clsx } from 'clsx'
import type { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react'

import styles from './MetadataFormField.module.css'

export const MetadataFormField: FC<Props> = ({
  name,
  label,
  value,
  register,
  disabled,
  placeholder,
  onChange
}) => (
  <Form.Field name={name}>
    <Form.Label className={clsx(styles.label, 'truncate')}>{label}</Form.Label>
    <Form.Control disabled={disabled} asChild>
      <TextField.Input value={value} placeholder={placeholder} onChange={onChange} {...register} />
    </Form.Control>
  </Form.Field>
)

/* eslint no-unused-vars: 0 */
interface Props extends WithReactHookForm {
  name: string
  label: string
  value?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  disabled?: boolean
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
}

interface WithReactHookForm {
  register?: any
}
