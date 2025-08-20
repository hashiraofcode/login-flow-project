import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  max-height: 50px;
  padding: 0.5rem;
  color: #fff;
  font: 500 clamp(1.8rem, 3vw, 2rem) inherit;
  background-color: #1d45faff;
  cursor: pointer;
  border-radius: 0.8rem;
  border: none;
  transition: background-color 1s ease-in-out;
  &:hover {
    background-color: #143ef8d7;
  }

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }
`
