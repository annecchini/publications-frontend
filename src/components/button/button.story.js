import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '.'

storiesOf('Button', module)
  .add('Button primary', () => <Button.Primary type="button" onClick={action('button-click')} children="Primary"/>)
