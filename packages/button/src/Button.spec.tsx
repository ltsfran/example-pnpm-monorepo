import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Button } from './index'

describe('Button component', () => {
  test('should render correctly', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
