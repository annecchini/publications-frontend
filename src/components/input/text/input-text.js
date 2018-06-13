import React from 'react'
import Input from '../../lib/input'

export const InputText = ({
  name, id, placeHolder, label, onChange, required,
}) => (
  <Input
    name={name}
    type="text"
    id={id}
    placeHolder={placeHolder}
    label={label}
    onChange={onChange}
    required={required}
  />
)
