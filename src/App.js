import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Accordion, Button, Form, Segment, Menu } from 'semantic-ui-react'

const panels = [
  {
    key: 'details',
    title: 'Fazer login',
    content: {
      as: Form.Input,
      label: 'Login',
      placeholder: 'Email cadastrado...',
    }
  },
]

class App extends Component {

  state = {
    activeIndex: -1,
    username: "",
    password: "",
    user_in: false
  }

  enviaForm = (event) => {
    event.preventDefault();
    if (this.state.username === 'fernando.void@gmail.com' && this.state.password === '123456') {
      console.log("logou");
      localStorage.setItem('auth-token', 'chaveDoUsuarioFernando');
      localStorage.setItem('user_login', 'Fernando');
      this.setState({user_in:true});
    } else {
      console.log("fail");
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
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

  handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user_login');
    this.setState({user_in: false});
  }

  render() {
    const { activeIndex } = this.state

    const loginForm = (
      <Form onSubmit={this.enviaForm} method="post">
        <Form.Input label='Enter Email' name="username" onChange={this.handleUsernameChange} type='text' />
        <Form.Input label='Enter Password' name="password" onChange={this.handlePasswordChange} type='password' />
        <Button type="submit">Entrar</Button>
      </Form>
    )

    const loginOptions = (
      <div>
        <Button onClick="">Dados de perfil</Button>
        <Button onClick={this.handleLogout}>Logout</Button>
      </div>
    )

    return (
      <div className="App">
        <div className="nav-bar">
          <div className="header-container">
            <div>SPSS - sistema de Processo Seletivo SEAD</div>
            {(localStorage.getItem('auth-token') === 'chaveDoUsuarioFernando') ? (
              <div className="auth-box">
                <Accordion as={Menu} vertical>
                  <Menu.Item>
                    <Accordion.Title
                      active={activeIndex === 0}
                      content={`Olá ${localStorage.getItem('user_login')}`}
                      index={0}
                      onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 0} content={loginOptions} />
                  </Menu.Item>
                </Accordion>
              </div>
            ) : (
                <div className="auth-box">
                  <Accordion as={Menu} vertical>
                    <Menu.Item>
                      <Accordion.Title
                        active={activeIndex === 0}
                        content='Fazer Login'
                        index={0}
                        onClick={this.handleClick}
                      />
                      <Accordion.Content active={activeIndex === 0} content={loginForm} />
                    </Menu.Item>
                  </Accordion>
                </div>
              )
            }


          </div>
        </div>
        <div className="corpo">Corpo de pagina welcome</div>
      </div>
    )
  }
}

export default App
