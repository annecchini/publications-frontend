import React from "react";

class Teste extends React.Component {
    render(){
        return (
            <div className="box">
                <div className="title">Teste</div>
                <Parent />
            </div>
        )
    }
}

export default Teste

class Child extends React.Component {
    componentDidMount() {
      this.props.onRef(this)
    }
    componentWillUnmount() {
      this.props.onRef(null)
    }
    method() {
      window.alert('do stuff')
    }
    render() {
      return <h1>Hello World!</h1>
    }
  }
  
  const ChildWithStyles = withStyles()(Child);
  
  class Parent extends React.Component {
    onClick = () => {
      this.child.method() // do stuff
    };
    render() {
      return (
        <div>
          <ChildWithStyles onRef={ref => (this.child = ref)} />
          <button onClick={this.onClick}>Child.method()</button>
        </div>
      );
    }
  }
  
  
  // Any higher-order component (HOC), for examle:
  // withStyles https://github.com/kriasoft/isomorphic-style-loader
  // connect https://github.com/reactjs/react-redux
  // etc.

  
  function withStyles() {
    return function wrapWithStyles(ComposedComponent) {
      return class WithStyles extends React.Component {
          render() {
          return <ComposedComponent {...this.props} />
        }
      }
    };
  }