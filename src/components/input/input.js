import React from 'react'

const Input = ({
  type, id, placeHolder, label,
}) => (<React.Fragment>
  {label && (<label htmlFor={id} >{label}</label>)}
  <input type={type} className="form-control" id={id} placeholder={placeHolder} />
</React.Fragment>)

export const Text = ({ id, placeHolder, label }) => (<Input type="text" id={id} placeHolder={placeHolder} label={label} />)

export const Password = ({ id, placeHolder, label }) => (<Input type="password" id={id} placeHolder={placeHolder} label={label} />)
