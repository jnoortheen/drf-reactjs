import React from 'react'
import AsyncSelect from 'react-select/lib/Async'
import API from './api'

class Select2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  loadOptions = (inputValue, callback) => {
    API.get('tags.json', {
      params: {
        name: this.props.name,
        value: inputValue,
      }
    }).then((res) => {
      callback(res.data.results)
    })
  }

  handleChange = (val) => {
    console.log(val)
  }

  render () {
    return (
      <AsyncSelect
        loadOptions={this.loadOptions}
        onChange={this.handleChange}
        cacheOptions
        defaultOptions
        getOptionLabel={(obj) => {
          console.log(obj)
          return obj.value
        }}
        getOptionValue={(obj) => obj._id}
      />)
  }
}

export default Select2