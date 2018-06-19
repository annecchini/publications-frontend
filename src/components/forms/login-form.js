import React, { Component }  from 'react'
import InputText from '../input/text'
import InputPassword from '../input/password'
import { Button } from 'semantic-ui-react'
import Text from '../text'

import 'semantic-ui-css/semantic.min.css'

export class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleUsernameChange = (value) => {
    this.setState({
      username: value,
    })
  }

  handlePasswordChange = (value) => {
    this.setState({
      password: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username || '', this.state.password || '')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <InputText
            name="username"
            label={this.props.userLabel}
            onChange=
              {this.handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <InputPassword
            name="password"
            label={this.props.passwordLabel}
            onChange={this.handlePasswordChange}
            required
          />
        </div>
        {this.props.error && <Text.Error>{this.props.error}</Text.Error>}
        <Button>
        Submit
        </Button>
      </form>
    )
  }
}
