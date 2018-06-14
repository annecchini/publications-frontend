import React from 'react'
import { shallow } from 'enzyme'
import Input from '../../lib/input'
import InputText from '.'

describe('<InputText /> component', () => {
  let inputText

  beforeAll(() => {
    inputText = shallow(<InputText />)
  })

  test('should render Input component', () => {
    const input = inputText.find(Input)
    expect(input).toHaveLength(1)
  })
})

