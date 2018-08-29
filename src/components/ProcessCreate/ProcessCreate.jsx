import React from "react";
import { Form, Table, Checkbox, Button, Icon } from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

const atribuicao = [
    { key: '0', text: 'Male', value: 'male' },
    { key: '1', text: 'Female', value: 'female' },
    { key: '2', text: 'Female', value: 'female' }
]

const polo = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

const enquadramento = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class ProcessCreate extends React.Component {

    state = { 
        numero: '', 
        ano: '', 
        curso: '', 
        resultadoFinal: '', 
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({ 
                numero: this.state.numero,
                ano: this.state.ano,
                curso: this.state.curso,
                resultadoFinal: this.state.resultadoFinal
            }),
            headers: new Headers({ 
                'Content-type': 'application/json'
            })
        }

        const dados = fetch(`http://localhost:8080/processes`, requestInfo)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Não foi possivel postar o novo processo...')
            }
        })

        dados.then(json => {
            return json;
        })

        //Update list

    }

    render() {

        return (
            <div className="box">
                <div className="title">Criar Processo</div>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        fluid
                        label='Numero'
                        placeholder='000'
                        name='numero'
                        value={this.state.numero}
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        fluid 
                        label='Ano' 
                        placeholder='0000'
                        name='ano'
                        value={this.state.ano}
                        onChange={this.handleChange} 
                    />
                    <Form.Select 
                        fluid 
                        label='Curso' 
                        options={options} 
                        placeholder='Escolha o curso...'
                        name='curso'
                        value={this.state.curso}
                        onChange={this.handleChange} 
                    />
                    <Form.Input 
                        fluid 
                        label='Resultado final' 
                        placeholder='dd/mm/aaaa' 
                        name='resultadoFinal'
                        value={this.state.resultadoFinal}
                        onChange={this.handleChange}
                    />
                    <Form.Button>Concluir</Form.Button>
                </Form>



                {/* <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Numero' placeholder='000' />
                        <Form.Input fluid label='Ano' placeholder='0000' />
                        <Form.Select fluid label='Curso' options={options} placeholder='Escolha o curso...' />
                        <Form.Input fluid label='Resultado final' placeholder='dd/mm/aaaa' />
                    </Form.Group> */}

                {/* <Form.TextArea label='Descrição' placeholder='Apresentação do edital...' />

                    <Table celled compact>

                        <Table.Header fullWidth>
                            <Table.Row>
                                <Table.HeaderCell>Atribuição</Table.HeaderCell>
                                <Table.HeaderCell>Polo</Table.HeaderCell>
                                <Table.HeaderCell>Enquadramento</Table.HeaderCell>
                                <Table.HeaderCell>Reserva</Table.HeaderCell>
                                <Table.HeaderCell>Ações</Table.HeaderCell>
                            </Table.Row>

                            <Table.Row>
                                <Table.HeaderCell><Form.Select fluid options={atribuicao} placeholder='Atribuição...' /></Table.HeaderCell>
                                <Table.HeaderCell><Form.Select fluid options={options} placeholder='Polo...' /></Table.HeaderCell>
                                <Table.HeaderCell><Form.Select fluid options={options} placeholder='Enquadramento...' /></Table.HeaderCell>
                                <Table.HeaderCell><Form.Checkbox slider /></Table.HeaderCell>
                                <Table.HeaderCell><Form.Button>Adicionar</Form.Button></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Professor</Table.Cell>
                                <Table.Cell>-</Table.Cell>
                                <Table.Cell>Professor da rede pública</Table.Cell>
                                <Table.Cell>Não</Table.Cell>
                                <Table.Cell><Form.Button>Excluir</Form.Button></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Tutor</Table.Cell>
                                <Table.Cell>Aracruz</Table.Cell>
                                <Table.Cell>-</Table.Cell>
                                <Table.Cell>Sim</Table.Cell>
                                <Table.Cell><Form.Button>Excluir</Form.Button></Table.Cell>
                            </Table.Row>
                        </Table.Body>

                        <Table.Footer fullWidth>
                        </Table.Footer>

                    </Table> */}

                {/* <Form.Group inline>
                        <Form.Button>Cancelar</Form.Button>
                        <Form.Button>Concluir</Form.Button>
                        <Form.Button>Mais detalhes</Form.Button>
                    </Form.Group>

                </Form> */}

            </div>
        )
    }
}

export default ProcessCreate