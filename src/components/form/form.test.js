import React from 'react'
import { shallow } from 'enzyme'

import Form from '.'
import Input from '../input'

describe('<Form.Login /> component', () => {
  let root
  const mockCallBack = jest.fn()

  beforeAll(() => {
    root = shallow(<Form.Login onSubmit={mockCallBack}/>)
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
  test('test submit event', () => {
    const form = root.find('form')
    expect(form).toHaveLength(1)

    const event = { preventDefault: () => {} }

    form.simulate('submit', event)

    expect(mockCallBack).toHaveBeenCalled()
  })
})
