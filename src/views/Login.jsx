import React from "react";
import { Accordion, Button, Form, Segment, Menu } from 'semantic-ui-react'
import  { Redirect } from 'react-router-dom'



class Login extends React.Component {

    state = {
        username: "",
        password: "",
    }

    enviaForm = (event) => {
        event.preventDefault();
        if (this.state.username === 'fernando.void@gmail.com' && this.state.password === '123456') {
            console.log("login successfull");
            localStorage.setItem('auth-token', 'chaveDoUsuarioFernando');
            localStorage.setItem('user_login', 'Fernando');
            this.setState({ user_in: true });
            this.props.history.push('/home')
        } else {
            console.log("login fail");
        }
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

    render() {
        return (
            <div className="box">
                <div className="title">Login</div>
                <Form onSubmit={this.enviaForm} method="post">
                    <Form.Input label='Enter Email' name="username" onChange={this.handleUsernameChange} type='text' />
                    <Form.Input label='Enter Password' name="password" onChange={this.handlePasswordChange} type='password' />
                    <Button type="submit">Entrar</Button>
                </Form>
            </div>
        )
    }
}

export default Login