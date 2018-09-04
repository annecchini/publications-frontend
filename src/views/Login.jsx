import React from "react";
import { Button, Form } from 'semantic-ui-react'
import UserSession from '../services/UserSession.jsx'


class Login extends React.Component {

    state = {
        username: "",
        password: "",
        msg: ""
    }

    enviaForm = (event) => {
        event.preventDefault();
        UserSession.login({ login: this.state.username, password: this.state.password })
            .then((data) => {
                this.props.history.push('/home')
                //this.props.history.goBack()
            })
            .catch(error => {
                this.setState({ msg: error.message });
            })
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
                    <span>{this.state.msg}</span>
                    <Form.Input label='Enter Email' name="username" onChange={this.handleUsernameChange} type='text' />
                    <Form.Input label='Enter Password' name="password" onChange={this.handlePasswordChange} type='password' />
                    <Button type="submit">Entrar</Button>
                </Form>
            </div>
        )
    }
}

export default Login