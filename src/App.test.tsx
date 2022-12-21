import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'

test('renders Our Equilibrium collection', () => {
  render(<App />)
  const element = screen.getByText(/Our Equilibrium collection2/i)
  expect(element).toBeInTheDocument()
})
