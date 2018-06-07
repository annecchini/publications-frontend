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
    const input = inputText.find({ name: inputTextProps.name })
    expect(input).toHaveLength(1)
  })

  test('should have type property', () => {
    const input = inputText.find({ type: inputTextProps.type })
    expect(input).toHaveLength(1)
  })

  test('should have id property', () => {
    const input = inputText.find({ id: inputTextProps.id })
    expect(input).toHaveLength(1)
  })

  test('should have placeHolder property', () => {
    const input = inputText.find({ placeHolder: inputTextProps.placeHolder })
    expect(input).toHaveLength(1)
  })

  test('should have label property', () => {
    const input = inputText.find({ label: inputTextProps.label })
    expect(input).toHaveLength(1)
  })

  test('should call prop when input changes', () => {
    const input = inputText.find({ type: inputTextProps.type })
    expect(input).toHaveLength(1)
    expect(input.dive().find('input')).toHaveLength(1)
    const event = { target: () => {} }
    input.dive().find('input').simulate('change', event)
    expect(mockCallBack).toHaveBeenCalled()
  })
})

describe('<Input.Password /> component', () => {
  let inputPassword

  const inputPasswordProps = {
    name: 'password', type: 'password', id: 'password', placeHolder: 'Password', label: 'Password', onChange: mockCallBack,
  }

  beforeAll(() => {
    inputPassword = shallow(<Input.Password {...inputPasswordProps}/>)
  })

  test('should be defined', () => {
    expect(inputPassword.exists()).toBeTruthy()
  })

  test('should have name property', () => {
    const input = inputPassword.find({ name: inputPasswordProps.name })
    expect(input).toHaveLength(1)
  })

  test('should have type property', () => {
    const input = inputPassword.find({ type: inputPasswordProps.type })
    expect(input).toHaveLength(1)
  })

  test('should have id property', () => {
    const input = inputPassword.find({ id: inputPasswordProps.id })
    expect(input).toHaveLength(1)
  })

  test('should have placeHolder property', () => {
    const input = inputPassword.find({ placeHolder: inputPasswordProps.placeHolder })
    expect(input).toHaveLength(1)
  })

  test('should have label property', () => {
    const input = inputPassword.find({ label: inputPasswordProps.label })
    expect(input).toHaveLength(1)
  })

  test('should call prop when input changes', () => {
    const input = inputPassword.find({ type: inputPasswordProps.type })
    expect(input).toHaveLength(1)
    expect(input.dive().find('input')).toHaveLength(1)
    const event = { target: () => {} }
    input.dive().find('input').simulate('change', event)
    expect(mockCallBack).toHaveBeenCalled()
  })
})
