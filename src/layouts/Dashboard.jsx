import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//importanto components
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

//importando views
import Home from "../views/Home.jsx";
import Login from "../views/Login.jsx";
import Welcome from "../views/Welcome.jsx";
import Users from "../views/Users.jsx";
import Processes from "../views/Processes.jsx";
import Register from "../views/Register.jsx"

const switchRoutes = (
    <Switch>
        <Redirect exact from="/" to="/welcome" key={0} />
        <Route path="/welcome" component={Welcome} key={1} />
        <Route path="/register" component={Register} key={1} />
        <Route path="/login" component={Login} key={2} />
        <Route path="/home" component={Home} key={3} />
        <Route path="/users" component={Users} key={4} />
        <Route path="/processes" component={Processes} key={5} />
        <Route path="/processes/new" component={Processes} key={6} />
        <Route path="/processes/list" component={Processes} key={7} />

    </Switch>
)


class Dashboard extends React.Component {
    render() {
        return (
            <div className="box">
                <div className="title">Layout Dashboard</div>
                <div className="flex-div">
                    <Sidebar />
                    <div className="viewbar">
                        <Header />
                        {switchRoutes}
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard