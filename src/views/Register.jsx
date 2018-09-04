import React from "react";
import { Form, Button, Message } from "semantic-ui-react"
import UserSession from '../services/UserSession.jsx'


const userTypeOptions = [
    { key: 'u', text: 'UFES', value: 'ufes' },
    { key: 's', text: 'SEAD', value: 'sead' },
]

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password: "",
            userType: ""
        }
    }

    submitRegisterUser = (event) => {
        event.preventDefault()

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({

                login: this.state.login,
                password: this.state.password,
                userType: this.state.userType,

                formMessage: ""
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }

        fetch(`http://localhost:8008/v1/users`, requestInfo)
            .then(response => {
                if (response.status === 201) {
                    UserSession.login({ login: this.state.login, password: this.state.password })
                    .then((data) => {
                        this.props.history.push('/home')
                    })
                    .catch(error => {
                        this.setState({ formMessage: "Sucesso ao cadastrar, mas erro ao fazer login..." })
                    })    
                } else {
                    return response.json()
                }
            })
            .then((json) => {
                if (typeof json !== 'undefined')
                    this.setState({ formMessage: json.userMessage })
            })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        return (
            <div className="box">
                <div className="title">Register</div>
                {this.state.formMessage ? (
                    <Message negative>
                        <Message.Header>Erro</Message.Header>
                        <p>{this.state.formMessage}</p>
                    </Message>
                ) : ""}
                <Form onSubmit={this.submitRegisterUser}>
                    <Form.Group widths='equal'>
                        <Form.Input label='Login(email)' placeholder='Coloque seu email aqui...' name="login" onChange={this.handleChange} />
                        <Form.Input label='Senha' type="password" placeholder='Coloque sua senha aqui...' name="password" onChange={this.handleChange} />
                        <Form.Select label='Tipo de usuário' options={userTypeOptions} placeholder='Escolha o tipo de login...' name="userType" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Field control={Button}>Criar</Form.Field>
                </Form>
            </div>
        )
    }
}

export default Register