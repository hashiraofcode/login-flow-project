import styled from 'styled-components'

export const MensageComponent = styled.p`
  width: 100%;
  height: auto;
  text-align: start;
  font-size: clamp(0.9rem, 1vw, 1rem);
  font-weight: 500;
  margin-bottom: 1rem;
  &.sucsses {
    color: rgba(0, 255, 21, 1);
  }

  &.error {
    color: red;
  }
`
