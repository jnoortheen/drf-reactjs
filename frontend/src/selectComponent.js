import React from 'react'
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable'
import API from './api'

class Select2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  loadOptions = (inputValue, callback) => {
    // separate endpoint for root node and other tags
    let url = null
    let params = null
    if (this.props.name === 'STANDARD') {
      url = 'standards-list'
      params = {
        name: inputValue,
        format: 'json',
      }
    } else {
      url = 'tags.json'
      params = {
        name: this.props.name,
        value: inputValue,
      }
    }

    API.get(url, {
      params: params
    }).then((res) => {
      callback(res.data.results.map(function (elem) {
        let label = elem.value
        if (elem.value === undefined) {
          // special case when tag is STANDARD
          label = elem.name
        }
        return {label: label, value: elem._id}
      }))
    })
  }

  handleChange = (val) => {
    let data = {}
    data[this.props.name] = val.label
    this.props.changeHandler(data)
  }

  render () {
    return (
      <AsyncCreatableSelect
        loadOptions={this.loadOptions}
        onChange={this.handleChange}
        cacheOptions
        defaultOptions
      />)
  }
}

export default Select2