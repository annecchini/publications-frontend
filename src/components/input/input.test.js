import React from 'react'
import { shallow, mount } from 'enzyme'

import Input from '.'

const mockCallBack = jest.fn()

describe('<Input.Text /> component', () => {
  let inputText

  const inputTextProps = {
    name: 'name', type: 'text', id: 'text', placeHolder: 'Text', label: 'Text', onChange: mockCallBack,
  }

  beforeAll(() => {
    inputText = shallow(<Input.Text {...inputTextProps}/>)
  })

  test('should be defined', () => {
    expect(inputText.exists()).toBeTruthy()
  })
  test('should have name property', () => {
    expect(inputText.find({ name: inputTextProps.name })).toHaveLength(1)
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
  test('test change event', () => {
    const input = inputText.find({ type: inputTextProps.type })
    expect(input).toHaveLength(1)
    expect(input.dive().find('input')).toHaveLength(1)
    input.dive().find('input').simulate('change')
    expect(mockCallBack).toHaveBeenCalled()
  })
})

describe('<Input.Password /> component', () => {
  let inputPassword

  const inputPasswordProps = {
    name: 'password', type: 'password', id: 'password', placeHolder: 'Password', label: 'Password',
  }

  beforeAll(() => {
    inputPassword = shallow(<Input.Password {...inputPasswordProps}/>)
  })

  test('should be defined', () => {
    expect(inputPassword.exists()).toBeTruthy()
  })
  test('should have name property', () => {
    expect(inputPassword.find({ name: inputPasswordProps.name })).toHaveLength(1)
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
  test('test change event', () => {
    const input = inputPassword.find({ type: inputPasswordProps.type })
    expect(input).toHaveLength(1)
    expect(input.dive().find('input')).toHaveLength(1)
    input.dive().find('input').simulate('change')
    expect(mockCallBack).toHaveBeenCalled()
  })
})
