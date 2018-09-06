import React from "react";
import { Table, TableBody, Button, Icon, Modal } from 'semantic-ui-react';
import UserSession from "../../services/UserSession";


class UsersList extends React.Component {

    state = {
        users: [],
        open: false
    }


    handleSubmit = () => {

    }

    componentDidMount() {

        const requestInfo = {
            method: 'GET',
            headers: new Headers({ //Estudar em fetch API
                'x-access-token': UserSession.data.auth_token
            })
        }

        fetch(`http://localhost:8008/v1/users`, requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Não foi possivel buscar os dados...')
                }
            })
            .then(json => {
                this.setState({ users: json })
                return json;
            })

    }


    handleClose() {

    }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {

        return (
            <div className="box">
                <div className="title">Lista de Usuários</div>


                {/* {TableExampleStriped()} */}

                <Table striped selectable celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Login</Table.HeaderCell>
                            <Table.HeaderCell textAlign="right">Ações</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {this.state.users.map((user) => {
                            return (
                                <Table.Row key={user.id}>
                                    <Table.Cell>{user.login}</Table.Cell>
                                    <Table.Cell textAlign="right">

                                        <ReadUserControl
                                            user={user}
                                        />
                                        <UpdateUserControl
                                            user={user}
                                        />
                                        <DeleteUserControl
                                            user={user}
                                        />

                                    </Table.Cell>
                                </Table.Row>
                            )


                        })}
                    </TableBody>
                </Table>

            </div>
        )
    }
}

export default UsersList

class ReadUserControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    closeModal = () => this.setState({ open: false })
    openModal = () => this.setState({ open: true })

    render() {
        return (
            <span>
                <Icon link color="blue" name='user' onClick={this.openModal} />
                <Modal
                    open={this.state.open}
                    onClose={this.closeModal}
                >
                    <Modal.Header>Dados do usuário</Modal.Header>
                    <Modal.Content>
                        <p>User Id: {this.props.user.id}</p>
                        <p>User Login: {this.props.user.login}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary onClick={this.closeModal}>
                            Cancelar
                        </Button>
                    </Modal.Actions>
                </Modal>
            </span>
        )
    }
}

class UpdateUserControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    closeModal = () => this.setState({ open: false })
    openModal = () => this.setState({ open: true })
    updateUser = () => {
        console.log("updateUser ativado!")
    }

    render() {
        return (
            <span>
                <Icon link color="green" name='edit' onClick={this.openModal} />
                <Modal
                    open={this.state.open}
                    onClose={this.closeModal}
                >
                    <Modal.Header>Atualizar usuário</Modal.Header>
                    <Modal.Content>
                        <p>User Id: {this.props.user.id}</p>
                        <p>User Login: {this.props.user.login}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="green" onClick={this.updateUser}>
                            Atualizar usuário
                        </Button>
                        <Button primary onClick={this.closeModal}>
                            Cancelar
                        </Button>
                    </Modal.Actions>
                </Modal>
            </span>
        )
    }
}

class DeleteUserControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    closeModal = () => this.setState({ open: false })
    openModal = () => this.setState({ open: true })
    deleteUser = () => {
        console.log("deleteUser ativado!")
    }

    render() {
        return (
            <span>
                <Icon link color="red" name='remove' onClick={this.openModal} />
                <Modal
                    open={this.state.open}
                    onClose={this.closeModal}
                >
                    <Modal.Header>Excluir usuário</Modal.Header>
                    <Modal.Content>
                        <p>User Id: {this.props.user.id}</p>
                        <p>User Login: {this.props.user.login}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary negative onClick={this.deleteUser}>
                            Excluir usuário
                        </Button>
                        <Button primary onClick={this.closeModal}>
                            Cancelar
                        </Button>
                    </Modal.Actions>
                </Modal>
            </span>
        )
    }
}