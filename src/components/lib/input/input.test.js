import React from 'react'
import { shallow } from 'enzyme'

import Input from '.'

const mockCallBack = jest.fn()

describe('<Input /> component', () => {
  let inputText

  const inputTextProps = {
    name: 'name', type: 'text', id: 'text', placeHolder: 'Text', label: 'Text', onChange: mockCallBack,
  }

  beforeAll(() => {
    inputText = shallow(<Input {...inputTextProps}/>)
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
    const input = inputText.find({ placeholder: inputTextProps.placeHolder })
    expect(input).toHaveLength(1)
  })

  test('should render label element', () => {
    const label = inputText.find('label')
    expect(label).toHaveLength(1)
  })

  test('should call prop when input changes', () => {
    const input = inputText.find('input')
    expect(input).toHaveLength(1)
    const event = { target: () => {} }
    input.find('input').simulate('change', event)
    expect(mockCallBack).toHaveBeenCalled()
  })
})
