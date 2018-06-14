import * as React from 'react'
import { storiesOf } from '@storybook/react'

import InputText from '.'

storiesOf('Input', module)
  .add('Input text', () => <InputText id="text" placeHolder="Digite um texto" label="Texto"/>)
