import React from 'react'

export const Input = ({
  name, type, id, placeHolder, label, onChange, required,
}) => (<React.Fragment>
  {label && (<label htmlFor={id} >{label}</label>)}
  <input
    name={name}
    type={type}
    className="form-control"
    id={id}
    placeholder={placeHolder}
    onChange={e => onChange(e.target.value)}
    required={required}
  />
</React.Fragment>)
