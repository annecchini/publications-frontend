import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Input from '.'

storiesOf('Input', module)
  .add('Input text', () => <Input.Text id="text" placeHolder="Digite um texto"/>)
  .add('Input password', () => <Input.Password id="password" placeHolder="Digite sua senha"/>)
