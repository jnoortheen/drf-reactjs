import React from 'react'
import {
  Button,
  Delete,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardFooter,
  ModalCardHeader,
  ModalCardTitle,
  ModalClose
} from 'bloomer'
import FormComponent from './formComponent'
import API from './api'
import { toast } from 'react-toastify'

class AddView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBusy: false, // to toggle Modal
      data: {}, // form data to be used to create new objects
    }
  }

  /**
   * called from FormComponent to update the current state
   */
  handleChange = (data) => {
    this.setState({data: Object.assign({}, this.state.data, data)})
  }

  preparedData = () => {
    let tags = []
    for (const [key, value] of Object.entries(this.state.data)) {
      if (['STANDARD', 'DESCRIPTION'].indexOf(key) !== -1) {
        continue
      }
      let tag = {name: key, value: value}

      if (key === 'FULL_CODE') {
        tag['description'] = this.state.data['DESCRIPTION']
      }

      tags.push(tag)
    }
    return {
      name: this.state.data['STANDARD'],
      tags: tags
    }
  }

  /**
   * called after the save button clicked
   */
  startSaveHandler = () => {
    this.setState({isBusy: true})

    API.post('standards.json', this.preparedData()).then((res) => {
      this.props.closeHandler()
      this.setState({isBusy: false})
      toast.success('Saved !', {
        position: toast.POSITION.TOP_CENTER
      })
    }).catch((err) => {
      alert('Caught error' + err)
      this.setState({isBusy: false})
    })
  }

  render () {
    return (
      <Modal isActive={this.props.isOpen}>
        <ModalBackground/>
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Add Code</ModalCardTitle>
            <Delete onClick={this.props.closeHandler}/>
          </ModalCardHeader>
          <FormComponent onChange={this.handleChange}/>
          <ModalCardFooter>
            <Button isColor='success' onClick={this.startSaveHandler} isLoading={this.state.isBusy}>Save</Button>
            <Button isColor='warning' onClick={this.props.closeHandler}>Cancel</Button>
          </ModalCardFooter>
        </ModalCard>
        <ModalClose/>
      </Modal>
    )
  }
}

export default AddView
