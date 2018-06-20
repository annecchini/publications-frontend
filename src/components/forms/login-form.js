import React, { Component }  from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import Text from '../text'

import 'semantic-ui-css/semantic.min.css'

export class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleUsernameChange = (e, { value }) => {
    this.setState({
      username: value,
    })
  }

  handlePasswordChange = (e, { value }) => {
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>{this.props.userLabel}</label>
          <Input type="text"
            name="username"
            onChange={this.handleUsernameChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>{this.props.passwordLabel}</label>
          <Input type="password"
            name="password"
            onChange={this.handlePasswordChange}
            required
          />
        </Form.Field>
        {this.props.error && <Text.Error>{this.props.error}</Text.Error>}
        <Button>
        Submit
        </Button>
      </Form>
    )
  }
}
