import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Form from '.'

const formProps = {
  onSubmit: action('submit'),
  userLabel: 'User',
  passwordLabel: 'Password',
}

storiesOf('Form', module)
  .add('Login form', () => <Form.Login {...formProps} />)
  .add('Login form with error', () => <Form.Login {...formProps} error="Error"/>)
