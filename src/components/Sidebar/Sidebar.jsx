import React from "react";
import { Link } from 'react-router-dom';
import UserSession from '../../services/UserSession.jsx'
import  { Redirect } from 'react-router-dom'



class Sidebar extends React.Component {

    logout = (event) => {
        event.preventDefault()
        UserSession.logout()
        window.location.replace("http://localhost:3000")
    }

    render() {
        
        return (

            <div className="box sidebar">
                <div className="title">Sidebar</div>

                {UserSession.getData().user_login ? (
                    <div className="box">
                        <div className="title">User Panel</div>
                        <p>{`${UserSession.getData().user_login}`}</p>
                        <ul>
                            <li><Link to="/home">Meu perfil</Link></li>
                            <li><Link to="/home">Editar perfil</Link></li>
                            <li><Link to="/home">Configurações</Link></li>
                            <li><Link to="/" onClick={this.logout}>Sair</Link></li>
                        </ul>
                    </div>
                ) : (
                    <div className="box">
                        <div className="title">User Panel</div>
                        <p>Visitante</p>
                        <ul>
                            <li><Link to="/login">Entrar</Link></li>
                            <li><Link to="/register">Registrar-se</Link></li>
                        </ul>
                    </div>
                )}

                <ul>
                    <li><Link to="/welcome">Welcome</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home">Users</Link></li>
                </ul>
            </div>

        )
    }
}

export default Sidebar