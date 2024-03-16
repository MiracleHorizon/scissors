import { TextField } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import type { ChangeEvent, FC } from 'react'

export const MetadataFormField: FC<Props> = ({ name, label, value, placeholder, onChange }) => (
  <Form.Field name={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control asChild>
      <TextField.Input value={value} placeholder={placeholder} onChange={onChange} />
    </Form.Control>
  </Form.Field>
)

/* eslint no-unused-vars: 0 */
interface Props {
  value: string
  name: string
  label: string
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}
