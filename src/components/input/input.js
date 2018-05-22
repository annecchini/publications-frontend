import React from 'react'

export const Text = ({ id, placeHolder, label }) =>
  (<React.Fragment>
    {label && (<label for={id} >{label}</label>)}
    <input type="text" class="form-control" id={id} placeholder={placeHolder} />
  </React.Fragment>)

export const Password = ({ id, placeHolder, label }) =>
  (<React.Fragment>
    {label && (<label for={id} >{label}</label>)}
    <input type="password" class="form-control" id={id} placeholder={placeHolder} />
  </React.Fragment>)
