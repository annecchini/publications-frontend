import * as React from 'react'
import { storiesOf } from '@storybook/react'

import InputPassword from '.'

storiesOf('Input', module)
  .add('Input password', () => <InputPassword id="password" placeHolder="Digite sua senha"/>)
