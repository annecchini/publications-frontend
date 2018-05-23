import React from 'react'
import { shallow } from 'enzyme'

import Input from '.'

describe('<Input.Text /> component', () => {
  let inputText

  const inputTextProps = {
    type: 'text', id: 'text', placeHolder: 'Text', label: 'Text',
  }

  beforeAll(() => {
    inputText = shallow(<Input.Text {...inputTextProps}/>)
  })

  test('should be defined', () => {
    expect(inputText.exists()).toBeTruthy()
  })
  test('should have type property', () => {
    expect(inputText.find({ type: inputTextProps.type })).toHaveLength(1)
  })
  test('should have id property', () => {
    expect(inputText.find({ id: inputTextProps.id })).toHaveLength(1)
  })
  test('should have placeHolder property', () => {
    expect(inputText.find({ placeHolder: inputTextProps.placeHolder })).toHaveLength(1)
  })
  test('should have label property', () => {
    expect(inputText.find({ label: inputTextProps.label })).toHaveLength(1)
  })
})

describe('<Input.Password /> component', () => {
  let inputPassword

  const inputPasswordProps = {
    type: 'password', id: 'password', placeHolder: 'Password', label: 'Password',
  }

  beforeAll(() => {
    inputPassword = shallow(<Input.Password {...inputPasswordProps}/>)
  })

  test('should be defined', () => {
    expect(inputPassword.exists()).toBeTruthy()
  })
  test('should have type property', () => {
    expect(inputPassword.find({ type: inputPasswordProps.type })).toHaveLength(1)
  })
  test('should have id property', () => {
    expect(inputPassword.find({ id: inputPasswordProps.id })).toHaveLength(1)
  })
  test('should have placeHolder property', () => {
    expect(inputPassword.find({ placeHolder: inputPasswordProps.placeHolder })).toHaveLength(1)
  })
  test('should have label property', () => {
    expect(inputPassword.find({ label: inputPasswordProps.label })).toHaveLength(1)
  })
})
