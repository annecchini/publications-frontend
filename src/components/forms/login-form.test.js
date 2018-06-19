import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '.'
import InputText from '../input/text'
import InputPassword from '../input/password'
import Text from '../text'

describe('<LoginForm /> component', () => {
  let root
  const mockCallBack = jest.fn()
  const error = 'error'

  beforeAll(() => {
    root = shallow(<LoginForm onSubmit={mockCallBack} error={error}/>)
  })

  test('should be defined', () => {
    expect(root.exists()).toBeTruthy()
  })

  test('should have user input', () => {
    expect(root.find(InputText)).toHaveLength(1)
  })

  test('should have password input', () => {
    expect(root.find(InputPassword)).toHaveLength(1)
  })

  test('should have error text', () => {
    expect(root.find(Text.Error)).toHaveLength(1)
    expect(root.find(Text.Error).dive().text()).toMatch(error)
  })

  test('should call prop when internal form submit', () => {
    const form = root.find('form')
    expect(form).toHaveLength(1)
    const event = { preventDefault: () => {} }
    form.simulate('submit', event)
    expect(mockCallBack).toHaveBeenCalled()
  })
})
