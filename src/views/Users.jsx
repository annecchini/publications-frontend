import React from "react";

class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            msg: ""
        }
    }

    // componentDidMount() {
    //     service.getUsers()
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
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default Users