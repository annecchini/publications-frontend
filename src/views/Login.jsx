import React from "react";
import { Accordion, Button, Form, Segment, Menu } from 'semantic-ui-react'
import  { Redirect } from 'react-router-dom'
import UserSession from '../services/UserSession.jsx'


class Login extends React.Component {

    state = {
        username: "",
        password: "",
        msg: ""
    }

    // envia(event) {
    //     event.preventDefault();
    //     const requestInfo = {
    //         method: 'POST',
    //         body: JSON.stringify({ login: this.login.value, senha: this.senha.value }),
    //         headers: new Headers({ //Estudar em fetch API
    //             'Content-type': 'application/json'
    //         })
    //     }

    //     fetch('http://localhost:8080/api/public/login', requestInfo)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.text();
    //             } else {
    //                 throw new Error('Não foi possivel fazer o login');
    //             }
    //         })
    //         .then(token => {
    //             localStorage.setItem('auth-token',token);
    //             localStorage.setItem('user_login', this.login.value);
    //             browserHistory.push('/timeline');
    //         })
    //         .catch(error => {
    //             this.setState({ msg: error.message });
    //         })
    // }


    enviaForm = (event) => {
        event.preventDefault();

        UserSession.login(this.state.username, this.state.password)
        .then(token => {
            console.log("Entrei no redirect.")
            this.props.history.push('/home')
        })
        .catch(error => {
            this.setState({ msg: error.message })
            console.log("Entrei no catch")
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