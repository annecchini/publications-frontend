import React from "react";
import { Form, Table, Checkbox, Button, Icon, Label, Menu, TableBody } from 'semantic-ui-react';


const TableExampleStriped = () => (
    <Table striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Date Joined</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Called</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)



class ProcessList extends React.Component {

    state = {
        processes: []
    }

    handleSubmit = () => {

    }

    componentDidMount() {

        const dados = fetch(`http://localhost:8080/processes`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Não foi possivel buscar os dados...')
                }
            })

        dados.then(json => {
            this.setState({ processes: json })
            return json;
        })
    }



    render() {

        return (
            <div className="box">
                <div className="title">Lista de processos</div>


                {/* {TableExampleStriped()} */}

                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Numero</Table.HeaderCell>
                            <Table.HeaderCell>Ano</Table.HeaderCell>
                            <Table.HeaderCell>Curso</Table.HeaderCell>
                            <Table.HeaderCell>Resultado final</Table.HeaderCell>
                            <Table.HeaderCell>Ações</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {this.state.processes.map((proc) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{proc.numero}</Table.Cell>
                                    <Table.Cell>{proc.ano}</Table.Cell>
                                    <Table.Cell>{proc.curso}</Table.Cell>
                                    <Table.Cell>{proc.resultadoFinal}</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                            )

                        })}
                    </TableBody>
                </Table>



            </div>
        )
    }
}

export default ProcessList