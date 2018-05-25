import React from 'react'
import { shallow } from 'enzyme'

import Form from '.'
import Input from '../input'
import Text from '../text'

describe('<Form.Login /> component', () => {
  let root
  const mockCallBack = jest.fn()
  const error = 'error'

  beforeAll(() => {
    root = shallow(<Form.Login onSubmit={mockCallBack} error={error}/>)
  })

  test('should be defined', () => {
    expect(root.exists()).toBeTruthy()
  })
  test('should have user input', () => {
    expect(root.find(Input.Text)).toHaveLength(1)
  })
  test('should have password input', () => {
    expect(root.find(Input.Password)).toHaveLength(1)
  })
  test('should have error text', () => {
    expect(root.find(Text.Error)).toHaveLength(1)
    expect(root.find(Text.Error).dive().text()).toMatch(error)
  })
  test('test submit event', () => {
    const form = root.find('form')
    expect(form).toHaveLength(1)
    const event = { preventDefault: () => {} }
    form.simulate('submit', event)
    expect(mockCallBack).toHaveBeenCalled()
  })
})
