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

class AddView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBusy: false, // to toggle Modal

    }
  }

  /**
   * called from FormComponent to update the current state
   */
  handleChange = (data) => {
    console.log(data)
  }

  /**
   * called after the save button clicked
   */
  startSaveHandler = () => {
    this.setState({isBusy: true})
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
