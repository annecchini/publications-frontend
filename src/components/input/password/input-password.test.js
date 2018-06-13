import React from 'react'
import { shallow } from 'enzyme'
import Input from '../../lib/input'
import InputPassword from '.'

describe('<InputPassword /> component', () => {
  let inputPassword

  beforeAll(() => {
    inputPassword = shallow(<InputPassword />)
  })

  test('should render Input component', () => {
    const input = inputPassword.find(Input)
    expect(input).toHaveLength(1)
  })
})
