import React from 'react'
import Input from '../../lib/input'

export const InputPassword = ({
  name, id, placeHolder, label, onChange, required,
}) => (
  <Input name={name}
    type="password"
    id={id}
    placeHolder={placeHolder}
    label={label}
    onChange={onChange}
    required={required}
  />
)
