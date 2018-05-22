import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Text from '.'

storiesOf('Text', module)
  .add('Paragraph normal', () => <Text.P>Paragraph normal</Text.P>)
  .add('Heading normal', () => <Text.H>Heading normal</Text.H>)
