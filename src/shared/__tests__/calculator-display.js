import React from 'react'
import {render} from 'react-testing-library'
import CalculatorDisplay from '../calculator-display'

test('mounts', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container).toMatchSnapshot()
  // expect(container.firstChild).toMatchSnapshot()
  // Then npm t -- -u
})
