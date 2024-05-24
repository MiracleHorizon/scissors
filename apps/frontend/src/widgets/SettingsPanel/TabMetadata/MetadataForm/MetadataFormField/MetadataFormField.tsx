import { Text, TextField } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import type { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react'

import styles from './MetadataFormField.module.css'

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
    <Text asChild truncate>
      <Form.Label className={styles.label}>{label}</Form.Label>
    </Text>
    <Form.Control disabled={disabled} asChild>
      <TextField.Root value={value} placeholder={placeholder} onChange={onChange} {...register} />
    </Form.Control>
  </Form.Field>
)
