import React from "react";
import ProcessCreate from "../components/ProcessCreate/ProcessCreate.jsx";
import ProcessList from "../components/ProcessList/ProcessList.jsx";


class Processes extends React.Component {
    render(){
        return (
            <div className="box">
                <div className="title">Processos</div>
                <ul>
                    <ProcessCreate />
                    <ProcessList />
                </ul>
            </div>
        )
    }
}

export default Processes