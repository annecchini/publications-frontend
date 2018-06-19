import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import LoginForm from '.'

const formProps = {
  onSubmit: action('submit'),
  userLabel: 'User',
  passwordLabel: 'Password',
}

storiesOf('Form', module)
  .add('Login form', () => <LoginForm {...formProps} />)
  .add('Login form with error', () => <LoginForm {...formProps} error="Error"/>)
