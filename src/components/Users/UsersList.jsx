import React from "react";
import {Table, TableBody } from 'semantic-ui-react';
import UserSession from "../../services/UserSession";


class UsersList extends React.Component {

    state = {
        users: []
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
            console.log(json)
            this.setState({ users: json })
            return json;
        })
    }



    render() {

        return (
            <div className="box">
                <div className="title">Lista de Usuários</div>


                {/* {TableExampleStriped()} */}

                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Login</Table.HeaderCell>
                            <Table.HeaderCell>Ações</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {this.state.users.map((user) => {
                            return (
                                <Table.Row key={user.id}>
                                    <Table.Cell>{user.login}</Table.Cell>
                                    <Table.Cell>
                                        <a>R </a>
                                        <a>U </a>
                                        <a>D </a>
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