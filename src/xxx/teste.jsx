import React from "react"
import {Button, Modal} from "semantic-ui-react"

class Teste extends React.Component {
  render() {
    return (
      <div>
        <div className="box">
          <div className="title">Teste</div>
          <Parent />
        </div>

        <div className="box">
          <div className="title">Teste</div>
          <ModalExampleCloseConfig />
        </div>
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

class ModalExampleCloseConfig extends React.Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
        <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button>
        <Button onClick={this.closeConfigShow(true, false)}>No Close on Dimmer Click</Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={this.close}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}