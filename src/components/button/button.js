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
  onClick, children, className, submit,
}) => (
  <button
    type={submit ? 'submit' : 'button'}
    className={`btn btn-${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export const Primary = ({ onClick, children, submit }) => (
  <Button
    onClick={onClick}
    className="primary"
    submit={submit}
  >
    {children}
  </Button>
)