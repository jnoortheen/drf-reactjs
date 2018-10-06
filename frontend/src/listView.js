import React, { Component } from 'react'
import API from './api'
import ReactTable from 'react-table'

class ListView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      columns: [{Header: 'ID', accessor: '_id'}, {Header: 'Name', accessor: 'name'}],
      pages: -1,// should default to -1 (which means we don't know how many pages we have)
      loading: true,
      page: 0,
    }
  }

  render () {
    return (
        <ReactTable
          data={this.state.data}
          columns={this.state.columns}
          pages={this.state.pages}
          loading={this.state.loading}
          manual // informs React Table that you'll be handling sorting and pagination server-side
          onFetchData={(state, instance) => {
            // show the loading overlay
            this.setState({loading: true})
            // fetch your data
            API.get('standards.json', {
              params: {
                page: state.page + 1,
                sorted: state.sorted,
              }
            })
              .then((res) => {
                console.log(res)
                // Update react-table
                this.setState({
                  data: res.data.results,
                  pages: res.data.pages,
                  loading: false
                })
              })
          }}
        />
    )
  }
}

export default ListView
