import React from 'react'

import './text.css'

export const P = ({ children, size }) => (
  <p
    className={`text--${size || 'normal'}`}
  >
    {children}
  </p>
)

export const H = ({ children, size }) => (
  <p
    className={`text-heading--${size || 'normal'}`}
  >
    {children}
  </p>
)

export const Error = ({ children, size }) => (
  <p
    className={`text-error--${size || 'normal'}`}
  >
    {children}
  </p>
)
