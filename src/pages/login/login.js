import React, { Component }  from 'react'
import LoginForm from '../../components/forms'

import { login } from '../../services/login/login'

export class Login extends Component {
  handleSubmit = (username, password) => {
    const status = login({ email: username, password })
  }

  render() {
    const formProps = {
      onSubmit: this.handleSubmit,
      userLabel: 'User',
      passwordLabel: 'Password',
    }
    return (
      <div className="d-flex justify-content-center align-items-center">
        <LoginForm {...formProps} />
      </div>
    )
  }
}
