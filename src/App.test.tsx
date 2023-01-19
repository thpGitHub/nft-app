import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'

test('renders Formation TypeScript', () => {
  render(<App />)
  const element = screen.getByText(/Formation TypeScript/i)
  expect(element).toBeInTheDocument()
})
