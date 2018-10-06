import React, { Component } from 'react'
import './App.css'
import 'react-table/react-table.css'
import 'bulma/css/bulma.css'
import { Columns, Container } from 'bloomer'
import ListView from './listView'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Container>
        <br/>
        <Columns>
          <h1 className="title column">
            Standards
          </h1>
          <div className="column">
            <button className="button is-large is-primary">
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
