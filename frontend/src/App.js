import React, { Component } from 'react'
import './App.css'
import 'react-table/react-table.css'
import 'bulma/css/bulma.css'
import { Columns, Container } from 'bloomer'
import ListView from './listView'
import AddViewModal from './addView'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      addViewIsOpen: false,
    }
  }

  showModal = () => {
    this.setState({addViewIsOpen: true})
  }

  hideModal = () => {
    this.setState({addViewIsOpen: false})
  }

  render () {
    return (
      <Container>
        <br/>
        <AddViewModal isOpen={this.state.addViewIsOpen} closeHandler={this.hideModal}/>
        <Columns>
          <h1 className="title column">
            Standards
          </h1>
          <div className="column">
            <button className="button is-large is-primary" onClick={this.showModal}>
              Add
            </button>
          </div>
        </Columns>
        <ListView/>
      </Container>
    )
  }
}

export default App
