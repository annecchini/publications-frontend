import React from "react";
import UsersList from "../components/Users/UsersList.jsx"

class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            msg: ""
        }
    }

    // componentDidMount() {
    //     usersService.getUsers()
    //         .then(userList => this.setState({
    //             users: userList
    //         }))
    //         .catch(error => this.setState({
    //             msg: error.msg
    //         }))
    // }

    render() {
        return (
            <div className="box">
                <div className="title">Users</div>
                <UsersList />
            </div>
        )
    }
}

export default Users