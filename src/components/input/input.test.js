import React from 'react'
import { shallow } from 'enzyme'

import Input from '.'

describe('<Input.Text /> component', () => {
  let inputText

  const inputTextProps = { id: 'text', placeHolder: 'Text', label: 'Text' }

  beforeAll(() => {
    inputText = shallow(<Input.Text {...inputTextProps}/>)
  })

  test('should be defined', () => {
    expect(inputText.exists()).toBeTruthy()
  })

  test('should have id property', () => {
    expect(inputText.find({ id: inputTextProps.id })).toHaveLength(1)
  })
  test('should have placeHolder property', () => {
    expect(inputText.find({ placeholder: inputTextProps.placeHolder })).toHaveLength(1)
  })
  test('should render label text', () => {
    expect(inputText.text()).toMatch(inputTextProps.label)
  })
})

describe('<Input.Password /> component', () => {
  let inputPassword

  const inputPasswordProps = { id: 'password', placeHolder: 'Password', label: 'Password' }

  beforeAll(() => {
    inputPassword = shallow(<Input.Password {...inputPasswordProps}/>)
  })

  test('should be defined', () => {
    expect(inputPassword.exists()).toBeTruthy()
  })

  test('should have id property', () => {
    expect(inputPassword.find({ id: inputPasswordProps.id })).toHaveLength(1)
  })
  test('should have placeHolder property', () => {
    expect(inputPassword.find({ placeholder: inputPasswordProps.placeHolder })).toHaveLength(1)
  })
  test('should render label text', () => {
    expect(inputPassword.text()).toMatch(inputPasswordProps.label)
  })
})
