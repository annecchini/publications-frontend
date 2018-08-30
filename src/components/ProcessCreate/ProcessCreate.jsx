import React from "react";
import { Form, Table, Select, Checkbox } from 'semantic-ui-react';

// const options = [
//     { key: 'm', text: 'Male', value: 'male' },
//     { key: 'f', text: 'Female', value: 'female' }
// ]

const cursos = [
    { key: '0', text: 'Especialização Matemática', value: '1' },
    { key: '1', text: 'Letras Italiano', value: '2' },
    { key: '2', text: 'Filosofia', value: '3' }
]

const atribuicao = [
    { key: '0', text: 'Professor', value: 'prf' },
    { key: '1', text: 'Tutor presencial', value: 'tpr' },
    { key: '2', text: 'Tutor a distância', value: 'tdi' },
    { key: '3', text: 'aluno', value: 'alu' }

]

const polo = [
    { key: '', text: '-', value: '' },
    { key: '0', text: 'Piuma', value: 'piuma' },
    { key: '1', text: 'Santa Teresa', value: 'santa-teresa' },
    { key: '2', text: 'Santa Lepoldina', value: 'santa-leopoldina' },
    { key: '3', text: 'Itapemirim', value: 'itapemirim' },
    { key: '4', text: 'Castelo', value: 'castelo' }
]

const enquadramento = [
    { key: '', text: '-', value: '' },
    { key: '0', text: 'Negro', value: 'negro' },
    { key: '1', text: 'Pobre', value: 'pobre' },
    { key: '2', text: 'Homosexual', value: 'homosexual' }

]

class VacancyModel {
    constructor() {
        this.designation = ""
        this.polo = ""
        this.restriction = ""
        this.reserve = false
    }
}

class ProcessCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numero: '',
            ano: '',
            curso: '',
            resultadoFinal: '',
            vacancyNew: new VacancyModel(),
            vacancyList: []
        }
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(null)
    }

    method() {
        console.log('O pai iniciou a função do filho')
        window.alert('do stuff')
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    getOnChange = (e, { name, value }) => {
        let newV = this.state.vacancyNew
        newV[name] = value
        this.setState({ vacancyNew: newV })
    }

    getOnChangeCheckbox = (e, { name, checked }) => {
        let newV = this.state.vacancyNew
        newV[name] = checked
        this.setState({ vacancyNew: newV })
    }


    handleSubmit = (event) => {

        event.preventDefault()

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

    addVacancyTemplate = (event) => {
        event.preventDefault()
        this.setState({
            vacancyList : this.state.vacancyList.concat([this.state.vacancyNew]),
            vacancyNew :  new VacancyModel()
        });

    }

    render() {

        return (
            <div className="box">
                <div className="title">Criar Processo</div>

                <Form
                    onSubmit={this.handleSubmit}
                >
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
                        options={cursos}
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
                    <Form.TextArea
                        label='Descrição'
                        placeholder='Apresentação do edital...'
                    />

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
                                <Table.HeaderCell>
                                    <Select
                                        name="designation"
                                        value={this.state.vacancyNew.designation}
                                        onChange={this.getOnChange}
                                        options={atribuicao}
                                        placeholder='Atribuição...'
                                    />
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    <Select
                                        name="polo"
                                        value={this.state.vacancyNew.polo}
                                        onChange={this.getOnChange}
                                        options={polo}
                                        placeholder='Polo...'
                                    />
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    <Select
                                        name="restriction"
                                        value={this.state.vacancyNew.restriction}
                                        onChange={this.getOnChange}
                                        options={enquadramento}
                                        placeholder='Enquadramento...'
                                    />
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    <Checkbox
                                        slider
                                        name="reserve"
                                        onChange={this.getOnChangeCheckbox}
                                    />
                                </Table.HeaderCell>
                                <Table.HeaderCell><Form.Button onClick={this.addVacancyTemplate}>Adicionar</Form.Button></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.state.vacancyList.map((vacancy) => {
                                return (
                                    <Table.Row key={vacancy.designation}>
                                        <Table.Cell>{vacancy.designation}</Table.Cell>
                                        <Table.Cell>{vacancy.polo}</Table.Cell>
                                        <Table.Cell>{vacancy.restriction}</Table.Cell>
                                        <Table.Cell>{vacancy.reserve ? 'Sim' : "Não"}</Table.Cell>
                                        <Table.Cell><Form.Button>Excluir</Form.Button></Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>

                    </Table>

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