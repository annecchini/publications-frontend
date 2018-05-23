import React from 'react'
import { mount } from 'enzyme'

import Button from '.'

describe('<Button.Primary /> component', () => {
  let buttonPrimary

  const buttonClass = 'primary'

  const mockCallBack = jest.fn()

  beforeAll(() => {
    buttonPrimary = mount(<Button.Primary type={buttonPrimary} onClick={mockCallBack}/>)
  })

  test('should be defined', () => {
    expect(buttonPrimary.exists()).toBeTruthy()
  })
  test('should have type property', () => {
    expect(buttonPrimary.find({ className: buttonClass })).toHaveLength(1)
  })
  test('test click event', () => {
    const innerButton = buttonPrimary.find('button')
    expect(innerButton).toHaveLength(1)
    innerButton.simulate('click')
    expect(mockCallBack).toHaveBeenCalled()
  })
})

