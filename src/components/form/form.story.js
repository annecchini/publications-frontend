import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Form from '.'

storiesOf('Form', module)
  .add('Login form', () => <Form.Login onSubmit={action('submit')} />)
