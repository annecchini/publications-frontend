import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '.'
import { Button, Form, Input, Message } from 'semantic-ui-react'

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

  test('should have Form component', () => {
    expect(root.find(Form)).toHaveLength(1)
  })

  test('should have Inputs components', () => {
    expect(root.find(Input)).toHaveLength(2)
  })

  test('should have Button component', () => {
    expect(root.find(Button)).toHaveLength(1)
  })

  test('should have Message component', () => {
    expect(root.find(Message)).toHaveLength(1)
    expect(root.find(Message).dive().text()).toMatch(error)
  })

  test('should call prop when internal form submit', () => {
    const form = root.find(Form)
    expect(form).toHaveLength(1)
    const event = { preventDefault: () => {} }
    form.simulate('submit', event)
    expect(mockCallBack).toHaveBeenCalled()
  })
})
