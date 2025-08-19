import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  max-height: 45px;
  padding: 2rem;
  color: #fff;
  font: 500 clamp(1.8rem, 3vw, 2rem) inherit;
  background-color: #1d45faff;
  cursor: pointer;
  border-radius: 0.8rem;
  border: none;

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }
`
