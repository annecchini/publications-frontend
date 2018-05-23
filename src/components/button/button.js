/*
TODO:
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
*/
import React from 'react'

const Button = ({
  type, onClick, children, className,
}) => (<button type={type} className={`btn btn-${className}`} onClick={onClick}>{children}</button>)

export const Primary = ({ type, onClick, children }) => <Button type={type} onClick={onClick}  className="primary">{children}</Button>
