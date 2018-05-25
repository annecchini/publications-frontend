import React from 'react'

const Input = ({
  name, type, id, placeHolder, label, onChange, required,
}) => (<React.Fragment>
  {label && (<label htmlFor={id} >{label}</label>)}
  <input name={name} type={type} className="form-control" id={id} placeholder={placeHolder} onChange={onChange} required={required}/>
</React.Fragment>)

export const Text = ({
  name, id, placeHolder, label, onChange, required,
}) => (<Input name={name} type="text" id={id} placeHolder={placeHolder} label={label} onChange={onChange} required={required}/>)

export const Password = ({
  name, id, placeHolder, label, onChange, required,
}) => (<Input name={name} type="password" id={id} placeHolder={placeHolder} label={label} onChange={onChange} required={required}/>)
