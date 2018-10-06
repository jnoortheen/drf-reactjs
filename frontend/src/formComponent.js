import React, { Component } from 'react'
import { Control, Field, Label, ModalCardBody, TextArea, Title } from 'bloomer'
import Select2 from './selectComponent'

class FormComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ModalCardBody>
        <Field>
          <Label>Description</Label>
          <Control>
            <TextArea placeholder='DESCRIPTION' onChange={(event) => {
              this.props.onChange({DESCRIPTION: event.target.value})
            }}/>
          </Control>
        </Field>
        <br/>
        <Title hasTextAlign={'center'}>Add New Alignment Tag</Title>
        <Field>
          <Label>Education Standard:</Label>
          <Control>
            <Select2 changeHandler={this.props.onChange} name={'STANDARD'}/>
          </Control>
        </Field>
        <Field>
          <Label>Grade Level:</Label>
          <Control>
            <Select2 changeHandler={this.props.onChange} name={'GRADE'}/>
          </Control>
        </Field>
        <Field>
          <Label>Learning Domain:</Label>
          <Control><Select2 changeHandler={this.props.onChange} name={'LEARNING_DOMAIN'}/></Control>
        </Field>
        <Field>
          <Label>Alignment Tag:</Label>
          <Control><Select2 changeHandler={this.props.onChange} name={'FULL_CODE'}/></Control>
        </Field>
      </ModalCardBody>
    )
  }
}

export default FormComponent
