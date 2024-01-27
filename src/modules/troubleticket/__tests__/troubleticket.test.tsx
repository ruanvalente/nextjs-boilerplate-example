import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import TroubleticketHome from '../pages/troubleticket-home/troubleticket-home'

test('renders TroubleticketHome', () => {
  render(<TroubleticketHome />)
  expect(
    screen.getByRole('heading', { level: 1, name: 'TroubleticketPage' }),
  ).toBeDefined()
})
