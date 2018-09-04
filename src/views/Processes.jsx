import React from "react";
import ProcessCreate from "../components/ProcessCreate/ProcessCreate.jsx";
import ProcessList from "../components/ProcessList/ProcessList.jsx";



class Processes extends React.Component {

    onClick = () => {
        this.processCreate.method() // do stuff
    };

    render() {
        return (
            <div className="box">
                <div className="title">Processos</div>
                <ProcessCreate
                    onRef={ref => (this.processCreate = ref)}
                />
                <ProcessList />
                {/* <button onClick={this.onClick}>Child.method()</button> */}
            </div>
        )
    }
}

export default Processes