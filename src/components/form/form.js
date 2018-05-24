import React, { Component }  from 'react'
import Input from '../input'
import Button from '../button'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
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
          <Input.Text name="username" label="Usuário" onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <Input.Password name="password" label="Senha" onChange={this.handleInputChange} />
        </div>
        <Button.Primary type="submit">Submit</Button.Primary>
      </form>
    )
  }
}
