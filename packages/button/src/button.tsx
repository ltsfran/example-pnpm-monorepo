import React, { MouseEvent } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #0056B3;
  }
`

interface ButtonOptions {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export type ButtonProps = React.PropsWithChildren<ButtonOptions>

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
)

export default Button
